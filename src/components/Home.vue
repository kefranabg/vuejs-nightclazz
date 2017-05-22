<template>
  <div>
    <h1>{{msg}}</h1>
    <div class="container">
      <ul class="list-group">
        <serie v-for="serie in series" :data="serie.show"></serie>

      </ul>
    </div>
  
  </div>
</template>

<script>
import seriesService from '@/services/series.service'
import Serie from '@/components/Serie'

export default {
  data () {
    return {
      msg: 'Hello Home',
      series: []
    }
  },
  created () {
    seriesService.getSeries().then(res => this.series = res.data)
  },
  components: {
    serie: Serie
  }
}
</script>

<style scoped>

</style>