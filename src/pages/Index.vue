<template>
  <q-page class="flex flex-center">
  <div class="column">
    <h3>Currently latest point</h3>
    <div class="text-subtitle1">lon: {{current.lon}}</div>
    <div class="text-subtitle1">lat: {{current.lat}}</div>
  </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      current: {
        lon: 0,
        lat: 0
      }
    }
  },
  mounted () {
    var that = this
    setInterval(function () {
      that.$axios.get('/require_data/latest').then(res => {
        that.current = res.data[0]
      })
    }, 1000)
  }
}
</script>
