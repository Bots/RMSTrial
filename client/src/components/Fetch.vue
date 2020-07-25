<template>
  <div>
    <div class="text-center pb-7">
      <v-btn class="ma-2" outlined color="indigo" @click="getData()">Fetch</v-btn>
      <v-btn class="ma-2" outlined color="indigo" @click="clearData()">Clear Data</v-btn>
    </div>
    <hr>
    <v-data-table
      :headers="headers"
      :items="DBClients"
      item-key="key"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
const fetch = require('node-fetch')

export default {
  data: function () {
    return {
      DBClients: [],
      headers: [
          { text: 'ID', align: 'start', value: 'info.id' },
          { text: 'Name', value: 'info.name' },
          { text: 'Company', value: 'info.company.name' },
          { text: 'Email', value: 'info.email' },
          { text: 'Phone', value: 'info.phone' }
      ]
    }
  },
  methods: {
    getData () {
      fetch('http://localhost:3001/api')
      .then(res => res.json())
      .then(json => {
        this.DBClients = json
        console.log(this.DBClients)
      })
    },
    clearData () {
      this.DBClients = []
      fetch('http://localhost:3001/api/clear')
      .then(res => res.json())
      .then(json => {
        console.log(json)
      })
    }
  }
}
</script>

<style>

</style>