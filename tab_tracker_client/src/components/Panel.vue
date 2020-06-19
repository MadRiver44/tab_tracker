<template>
  <v-container fill-height>
    <v-col class="justify-center align-center" column>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <slot name="action"> </slot>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <slot></slot>
        </div>
      </div>
    </v-col>
  </v-container>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style>
.createSongButton {
  background-color: #fff;
  color: green;
}
</style>
