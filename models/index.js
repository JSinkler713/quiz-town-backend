const mongoose = require('mongoose')
// connect to mongoAtlas
const connectionString = process.env.DATABASE_URL || "mongodb://localhost:27017/quiztown"

const configOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose.connect(connectionString, configOptions)
    .then(() => console.log('MongoDB successfully connected...'))
    .catch(err => console.log(`MongoDB connection error: ${err}`))

module.exports = {
    Quiz: require('./quiz'),
    Question: require('./question')
}

