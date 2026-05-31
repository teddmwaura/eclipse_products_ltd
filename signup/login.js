import { showMessage } from "../scripts/showMessage.js"

const form = document.querySelector('.login-form')
const usernameInput = document.querySelector('.email') // your username field
const passwordInput = document.querySelector('.password')

form.addEventListener('submit', async (e) => {
  e.preventDefault() // prevent page refresh

  const username = usernameInput.value.trim()
  const password = passwordInput.value.trim()

  if(!username || !password){
    showMessage('Please fill in all fields', 'error')
    return
  }

  try {
    const res = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })

    const data = await res.json()

    if(!res.ok){
      showMessage(data.message || 'Login failed, please try again later', 'error')
      return
    }

    // Save JWT token in localStorage
    localStorage.setItem('token', data.token)
    showMessage('Login successful!', 'success')

    // Optional: redirect to dashboard or protected page after 1.5s
    setTimeout(() => {
      window.location.href = 'index.html'
    }, 1500)

  } catch(err) {
    console.error(err)
    showMessage('Server error. Please try again later.', 'error')
  }
})
