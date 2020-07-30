const express = require('express')
const app = express()
const routes = require('./routes')
const db = require('./models');
const ctrl = require('./controllers')
// Middleware - JSON parsing
app.use(express.json())

/*
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
*/
// quiz routes
//app.post('/api/v1/quiz', ctrl.quizzes.create);
//app.get('/api/v1/quiz/:name', ctrl.quizzes.show);
app.use('/api/v1/quiz', routes.quiz)

// Listening
app.listen(4000, ()=> console.log('server running on port 4000'))
