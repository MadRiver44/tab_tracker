const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config.js')
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

/**
 * we are passing in the express app instance to the routes in route.js
 */
require('./routes')(app)

/**
 * https://sequelize.org/v5/class/lib/sequelize.js~Sequelize.html#instance-method-sync
 * connects sequelize to the db, creates the tables, syncs all models to the database
 * once done, we start the server
 */
sequelize.sync() // {force: true} to clear db
  .then(() => {
    app.listen(config.port, () => console.log(`THI is listening on ${config.port}`))
  })
