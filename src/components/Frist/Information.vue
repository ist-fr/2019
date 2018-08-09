<template>
    <b-table striped hover :items="date"></b-table>
</template>
<script>
export default {
  data () {
    return {
      date: [
        {
          date: 15,
          month: 'August',
          info: 'Website'
        },
        {
          date: 25,
          month: 'August',
          info: 'Open(EasyChair)'
        },
        {
          date: 25,
          month: 'September',
          info: 'Review State'
        },
        {
          date: 10,
          month: 'November',
          info: 'Resualt Released'
        }
      ]
    }
  },
  components: {
  },
  method: {
  }
}
</script>
<style>
</style>
