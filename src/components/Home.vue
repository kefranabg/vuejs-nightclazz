<template>
  <div>
    <h1>{{msg}}</h1>
    <div class="container">
      <ul class="list-group">
        <serie class="pointer" v-for="serie in series" :data="serie.show" @click.native="toggleFav(serie)"></serie>
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
    seriesService.getSeries().then(res => this.series = res.data)
  },
  methods: {
    toggleFav: function(serie) {
      !favoritesService.list.find(item => item.show.id === serie.show.id) ? 
      favoritesService.addFavorite(serie) : favoritesService.removeFavorite(serie)
    }
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