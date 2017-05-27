<template>
  <div>
    <h1>{{msg}}</h1>
    <div class="container">
      <ul class="list-group">
        <serie class="pointer" v-for="serie in series" :data="serie" @clicked="toggleFav($event)"></serie>
      </ul>
    </div>
  
  </div>
</template>

<script>
import seriesService from '@/services/series.service'
import favoritesService from '@/services/favorites.service'
import Serie from '@/components/Serie'

export default {
  data () {
    return {
      msg: 'Hello Home',
      series: []
    }
  },
  created () {
    seriesService.getSeries().then(res => this.series = res.data.map(item => item.show))
  },
  methods: {
    toggleFav: function(serie) {
      !favoritesService.list.find(item => item.id === serie.id) ? 
      favoritesService.addFavorite(serie) : favoritesService.removeFavorite(serie)
    }
  },
  computed : {
    
  },
  components: {
    serie: Serie
  }
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>