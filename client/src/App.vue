<template>
  <v-app>
    <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>RMS Trial</v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab href="/" router>Home</v-tab>
          <v-tab href="/save" router>Save</v-tab>
          <v-tab href="/fetch" router>Fetch</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px;">
        <Home v-if="dataLoaded" :clients="clients" style="margin-top: 250px"></Home>
      </v-container>
    </v-sheet>
  </v-card>
  </v-app>
</template>

<script>
import Home from './components/Home'
const fetch = require('node-fetch')

export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    clients: [],
    dataLoaded: false
  }),

  created() {
   fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(json => {
       this.clients = json
       JSON.parse(JSON.stringify(this.clients))
       this.dataLoaded = true
     })
  }
}
</script>
