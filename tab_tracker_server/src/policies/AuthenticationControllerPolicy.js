// create espress middleware to validate the dataa requirements
const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp(/^[a-zA-Z0-9]{8,32}$/)// ^.+@[^\.].*\.[a-z]{2,}$
      )
    }
    // we validate the req.body against the schema
    const { error } = Joi.validate(req.body, schema)
    // if error we provide useful information
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address.'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password failed to match the following rules:
            <br>
              1. It must contain ONLY the following characters: lowercase, uppercase, numerics
            <br>
              2. It MUST be 8 characters in length and not longer than 32 characters in length
              `
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}
