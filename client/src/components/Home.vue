<template>
  <v-data-table
    :headers="headers"
    :items="this.clients"
    class="elevation-1"
  ></v-data-table>
</template>

<script>

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
    }
 },

 props: ['clients'],

 mounted() {
   console.log(this.clients)
 }
}

</script>

<style>

</style>