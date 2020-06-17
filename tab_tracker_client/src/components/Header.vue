<template>
  <!-- <v-app-bar> TODO make the bar fixed!!!!-->
  <v-toolbar fixed text class="cyan dark">
    <v-toolbar-title class="mr-4">
      <span class="home" @click="navigateTo({ name: 'Root' })"
        >Tab Tracker</span
      ></v-toolbar-title
    >
    <v-toolbar-items>
      <v-btn text>Browse</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text @click="navigateTo({ name: 'Login' })">Login</v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-btn text @click="navigateTo({ name: 'Register' })">Sign up!</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <!-- </v-app-bar> -->
</template>

<script>
  export default {
    methods: {
      navigateTo(route) {
        this.$router.push(route, () => {}) // "() => {}"" avoids Error: Avoided redundant navigation to current location: "/login".
      }
    }
  }
</script>

<style>
  .home {
    cursor: pointer;
  }
  .home:hover {
    color: #e9e;
  }
  .v-toolbar-content {
    padding: 0;
  }
</style>
