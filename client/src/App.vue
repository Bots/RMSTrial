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
          <v-tab to="/" replace>Home</v-tab>
          <v-tab to="/save" replace>Save</v-tab>
          <v-tab to="/fetch" replace>Fetch</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet id="scrolling-techniques-3" style="padding-top: 250px">
      <router-view/>
    </v-sheet>
  </v-card>
  </v-app>
</template>

<script>
// import Home from './components/Home'
// import Save from './components/Save'
// import Fetch from './components/Fetch'

export default {
  name: 'App',

  components: {
    // Home,
    // Save,
    // Fetch
  },

  data: function () {
    return {
      
    }
  }
}
</script>
