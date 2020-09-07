const express = require('express')
// require dotenv, will look for .env file in root of project
require('dotenv').config()
console.log(process.env.FAKE)
const app = express()
const routes = require('./routes')
const db = require('./models');
const ctrl = require('./controllers')
const cors = require('cors')
// Middleware - JSON parsing
app.use(express.json())

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use('/api/v1/quiz', routes.quiz)
app.use('/api/v1/question', routes.question)

// Listening
app.listen(4000, ()=> console.log('server running on port 4000'))
