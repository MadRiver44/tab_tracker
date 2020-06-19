const AuthenticationController = require('./controllers/AuthenticationController')
const SongsController = require('./controllers/SongsController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.get('/status', (req, res) => res.send({ message: 'The start of a Turney Heavy Industries' }))

  app.post('/register',
    AuthenticationControllerPolicy.register, // middleware before we hit the controller
    AuthenticationController.register)

  app.post('/login', AuthenticationController.login)

  app.get('/songs', SongsController.getSongs)

  app.post('/songs', SongsController.post)
}
