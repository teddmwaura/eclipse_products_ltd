import { showMessage } from "../scripts/showMessage.js"

const form = document.querySelector('.product-form')
const usernameInput = document.querySelector('.username-html')
const passwordInput = document.querySelector('.password-html')


form.addEventListener('submit', async (e) => {
  e.preventDefault() // prevent default form submission

  const username = usernameInput.value.trim()
  const password = passwordInput.value.trim()

  // Optional: simple frontend validation
  if (!username || !password) {
    showMessage('Please fill in all fields', 'error')
    return
  }

  try {
    const res = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password }) // sending username & password only
    })

    const data = await res.json()

    if (!res.ok) {
      showMessage(data.message || 'Registration failed', 'error')
      return
    }

    showMessage('Registration successful! You can login now.', 'success')
    form.reset() // clear the form
  } catch (err) {
    console.error(err)
    showMessage('Server error. Please try again later.', 'error')
  }
})

