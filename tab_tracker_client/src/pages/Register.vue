<template>
  <v-container fill-height>
    <v-col class="justify-center align-center" column>
      <v-flex xs6 offset-xs3>
        <panel title="Register">
          <div class="pl-4 pr-4 pt-2 pb-2">
            <form name="tab-tracker-form" autocomplete="off">
              <v-text-field label="Email" v-model="email" single-line
                >Email</v-text-field
              >
              <br />
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                clearable
                clear-icon="x"
                hint="At least 8 characters"
                counter
                autocomplete="new-password"
              ></v-text-field>
            </form>
            <br />
            <div class="error" v-html="error" />
            <br />
            <v-btn class="cyan" dark @click="register">Submit</v-btn>
          </div>
        </panel>
      </v-flex>
    </v-col>
  </v-container>
</template>

<script>
import authenticationService from '../services/authenticationService'
import Panel from '../components/Panel.vue'
export default {
  components: {
    Panel
  },
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register() {
      try {
        const response = await authenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response)
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style>
.error {
  color: red;
}
</style>
