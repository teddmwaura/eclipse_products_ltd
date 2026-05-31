const express = require('express')// build the backend application
const cors = require('cors')//allows frontend to talk to the backend
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'mysecretkey'
const bcrypt = require('bcrypt')

const app = express()// allows to build express application

app.use(express.json())//allows server to read json data from the frontend
app.use(cors())// allows frontend to access the backend on diff domains

const PORT = 3000

let users = []

app.get('/', async (req, res) => {
  res.send('Server is working 🚀')
})

app.post('/register', async (req, res) => {

  const { username, password } = req.body

  if(!username || !password){
    return res.status(400).json({ message: "Please enter both username and password and try again" })
  }

  const userExist = users.find(u => u.username === username)

  if(userExist){
    return res.status(409).json({ message: "User already exists, proceed to login" })
  }

  // 🔥 HASH PASSWORD
  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = {
    id: Date.now(),
    username,
    password: hashedPassword
  }

  users.push(newUser)

  res.status(201).json({
    message: "User created successfully"
  })
})

app.post('/login', async (req, res) => {

  const { username, password } = req.body

  if(!username || !password){
    return res.status(400).json({ message: "Please enter username and password" })
  }

  const user = users.find(u => u.username === username)

  if(!user){
    return res.status(404).json({ message: "User not found, sign up first" })
  }

  // 🔥 COMPARE PASSWORDS
  const isMatch = await bcrypt.compare(password, user.password)

  if(!isMatch){
    return res.status(401).json({ message: "Invalid credentials" })
  }

  // JWT stays same
  const token = jwt.sign(
    { id: user.id, username: user.username },
    SECRET_KEY,
    { expiresIn: "1h" }
  )

  res.status(200).json({
    message: "Login successful",
    token
  })

})


app.get('/profile', (req, res) => {

  const authHeader = req.headers.authorization

  if(!authHeader){
    return res.status(401).json({ message: "No token provided" })
  }

  const token = authHeader.split(" ")[1]

  try {
    const decoded = jwt.verify(token, SECRET_KEY)

    res.json({
      message: "Access granted",
      user: decoded
    })

  } catch (err) {
    res.status(403).json({ message: "Invalid token" })
  }

})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)//starts the server
})