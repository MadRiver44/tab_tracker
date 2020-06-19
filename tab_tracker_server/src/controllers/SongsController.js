const { Song } = require('../models')

module.exports = {
  async getSongs (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 20
      })
      console.log(songs)
      res.send(songs)
    } catch (error) {
      res.status(500).send({
        error: 'An error has occured trying to fetch songs'
      })
    }
  },

  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (error) {
      res.status(500).send({
        error: 'An error has occured trying to create the song'
      })
    }
  }
}
