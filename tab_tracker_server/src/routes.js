const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
module.exports = (app) => {
  app.get('/status', (req, res) => res.send({ message: 'The start of a Turney Heavy Industries' }))

  app.post('/register',
    AuthenticationControllerPolicy.register, // middleware before we hit the controller
    AuthenticationController.register)
}
