const express = require('express')
const app = express()
const routes = require('./routes')
const db = require('./models');
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
// API routes
//app.use('/api/v1/quiz', routes.quizzes)


const show = (req,res) => {
  db.Quiz.find( {name: req.params.name }, (err, foundQuiz)=> {
    res.status(200).json({ quiz: foundQuiz });
  })
}

const create = (req, res) => {
  db.Quiz.create(req.body, (err, createdQuiz) => {
    if (err) console.log('error', err);
    res.status(200).json( { quiz: createdQuiz } )
  });
}

// quiz routes
app.post('/api/v1/quiz', create);
app.get('/api/v1/quiz/:name', show);


// Listening
app.listen(4000, ()=> console.log('server running on port 4000'))
