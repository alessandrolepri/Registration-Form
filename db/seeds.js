require('dotenv').config()

const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.Promise = Promise


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, (err, db) => {
  db.dropDatabase()
    .then(() => console.log('Database successfully seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
