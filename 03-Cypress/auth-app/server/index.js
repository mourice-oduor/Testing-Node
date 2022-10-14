import Chalk from 'chalk'
import config from '@config'
import app from '@server/app'
import Mongoose from 'mongoose'

// app.listen(config.port, () => {
//     console.log(`
//         ${Chalk.blue(`💚   Project running on http://localhost:${config.port}`)}
//   `)
// })

// Mongoose.connect(config.databaseUrl[config.environment], {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// })

// Mongoose.connection.on('error', () => {
//     throw new Error(`unable to connect to database: ${config.databaseUrl[config.environment]}`)
// })

// Mongoose.connection.once('open', () => {
//     console.log(`Connected to database: ${config.databaseUrl[config.environment]}`)
// })


// Connect to mongo db database using mongoose and set debug to true to see the queries

Mongoose.connect(config.databaseUrl[config.environment], { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {
      console.log('Database connected')

      app.listen(config.port, () => {
          console.log(`
              ${Chalk.blue(`💚   Project running on http://localhost:${config.port}`)}
        `)
      })
  },
  (err) => {
      console.log('Database connection error: ' + err)
  }
)

Mongoose.set('debug', true)
