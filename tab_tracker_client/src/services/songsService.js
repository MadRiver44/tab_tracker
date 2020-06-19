import api from '../services/api'

export default {
  getSongs() {
    return api().get('songs')
  },
  post(song) {
    return api().post('songs', song)
  }
}
