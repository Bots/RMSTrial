<template>
  <div>
    <div class="text-center pb-7">
      <v-btn class="ma-2" outlined color="indigo" @click="saveData(storedClients)">Save</v-btn>
    </div>
    <hr>
    <v-data-table
      :headers="headers"
      :items="storedClients"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

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
      ]
    }
  },
  methods: {
    saveData: function (storedClients) {
      fetch("http://localhost:3001/api", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(storedClients)
      })
      .then( (response) => { 
        console.log(response)
      });
    }
  },
  computed: {
    ...mapState(['storedClients'])
  }
}


</script>

<style>

</style>