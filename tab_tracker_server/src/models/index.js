// Index.js connects to our db
const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

/**
 * * Here we are grabbing the config in config folder and passing
 * * to the Sequelize instance.
 * * Sequelize is an ORM used to connect to sql databases
 * * sqlite3 is a database engine that reads and writes to local disk (so we dont have to setup postgresql tables locally)
 */
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

/**
 * * Important - how we read the models in  model folder
 * * Below is automatic functionality to read through all
 * * the models in  this current directory (models).
 *
 * * The alternative to this helper is to import all the files and setit up for sequelize
 * *
 */
fs
  .readdirSync(__dirname) // reads throught the current directory and returns an array of files
  .filter((file) => file !== 'index.js') // we filter out index.js (this file) we want all the other models
  // forEach model we find we use the sequelize import method, we provide a full path to the file
  // and sequelize will automatically import it and set it up to be used with sequelize
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model // we set the name of the model
  })

// we declare these variables to have access to the upper and lower case sequelize objects.
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
