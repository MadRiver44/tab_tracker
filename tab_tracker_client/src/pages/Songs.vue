<template>
  <v-container fill-height>
    <v-col class="justify-center align-center" column>
      <v-flex xs6 offset-xs3>
        <panel title="Songs">
          <v-btn
            slot="action"
            fab
            light
            small
            right
            middle
            absolute
            class="green accent-3"
            @click="navigateTo({ name: 'CreateSong' })"
          >
            <v-icon>+</v-icon>
          </v-btn>
          <div v-for="song in songs" :key="song.id" class="song">
            <v-layout>
              <v-flex xs6>
                <div class="song-title">{{ song.title }}</div>
                <div class="song-artist">{{ song.artist }}</div>
                <div class="song-genre">{{ song.genre }}</div>
                <v-btn
                  dark
                  class="cyan"
                  @click="
                    navigateTo({ name: 'song', params: { songId: song.id } })
                  "
                  >View</v-btn
                >
              </v-flex>
              <v-flex xs6
                ><img src="song.albumImageUrl" alt="" class="album-image"
              /></v-flex>
            </v-layout>
          </div>
        </panel>
      </v-flex>
    </v-col>
  </v-container>
</template>

<script>
import Panel from '../components/Panel.vue'
import songsService from '../services/songsService'

export default {
  data() {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  },
  async mounted() {
    this.songs = (await songsService.getSongs()).data
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
