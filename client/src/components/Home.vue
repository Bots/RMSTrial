<template>
  <div>
    <div class="text-center pb-7">
      <v-btn class="ma-2" outlined color="indigo" @click="getData">Download</v-btn>
    </div>
    <hr>
    <v-data-table
      :headers="headers"
      :items="clients"
      class="elevation-1"
    ></v-data-table>
  </div>
  
</template>

<script>
const fetch = require('node-fetch')

export default {
 data: function () {
    return {
      headers: [
          {
            text: 'ID',
            align: 'start',
            value: 'id',
          },
          { text: 'Name', value: 'name' },
          { text: 'Company', value: 'company.name' },
          { text: 'Email', value: 'email' },
          { text: 'Phone', value: 'phone' },
      ],
      clients: [],
      dataLoaded: false
    }
 },
 methods: {
   getData: function () {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(json => {
       this.clients = json
       this.$store.dispatch('loadItems', this.clients);
       this.dataLoaded = true
     })
   }
 }
}

</script>

<style>

</style>