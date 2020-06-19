<template>
  <div>
    <v-layout>
      <v-flex xs4>
        <Panel title="Song Metadata">
          <v-text-field
            class="required"
            label="Title"
            required
            :rules="[rules.required]"
            type="text"
            v-model="song.title"
          >
          </v-text-field>
          <v-text-field
            label="Artist"
            required
            :rules="[rules.required]"
            type="text"
            v-model="song.artist"
          >
          </v-text-field>
          <v-text-field
            label="Album"
            required
            :rules="[rules.required]"
            type="text"
            v-model="song.album"
          >
          </v-text-field>
          <v-text-field
            label="Genre"
            required
            :rules="[rules.required]"
            type="text"
            v-model="song.genre"
          >
          </v-text-field>
          <v-text-field
            label="Album Image Url"
            required
            :rules="[rules.required]"
            type="text"
            v-model="song.albumImageUrl"
          ></v-text-field>
          <v-text-field
            label="YouTube Id"
            required
            :rules="[rules.required]"
            type="text"
            v-model="song.youTubeId"
          >
          </v-text-field>
        </Panel>
      </v-flex>

      <v-flex xs8>
        <Panel
          title="Song Tab and Lyrics"
          required
          :rules="[rules.required]"
          class="metadata"
        >
          <v-textarea
            label="lyrics"
            required
            :rules="[rules.required]"
            type="text"
            v-model="song.lyrics"
            multi-line
          >
          </v-textarea>
          <v-textarea
            label="Tab"
            required
            :rules="[rules.required]"
            type="text"
            v-model="song.tab"
            multi-line
          >
          </v-textarea>
        </Panel>
        <div v-if="error" class="danger-alert">{{ error }}</div>
        <v-btn class="cyan" dark @click="create">Create Song</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Panel from '../components/Panel'
import songsService from '../services/songsService'

export default {
  components: {
    Panel
  },
  data() {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youTubeId: null,
        lyrics: null,
        tab: null
      },
      rules: {
        required: value => !!value || 'Item is required'
      },
      error: null
    }
  },
  methods: {
    async create() {
      this.error = null
      const areAllFieldsFilledIn = Object.keys(this.song).every(
        key => !!this.song[key]
      )
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields'
        return
      } else {
        try {
          await songsService.post(this.song)
          this.$router.push({ name: 'Songs' })
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
}
</script>

<style>
.container .metadata {
  align-items: start;
}

.danger-alert {
  color: red;
}
/* .required label::after {
  content: '*';
   color: red;
} */
</style>
