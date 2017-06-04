<template>
  <div>
    <h1>{{msg}}</h1>
    <div class="container">
      <div class="form-group">
        <input type="text" v-model="search" class="form-control" placeholder="Rechercher ...">
      </div>
      <ul class="list-group">
        <serie class="pointer" v-for="serie in filteredSeries" :data="serie" @clicked="toggleFav($event)"></serie>
      </ul>
    </div>
  </div>
</template>

<script>
import seriesService from '@/services/series.service'
import favoritesService from '@/services/favorites.service'
import Serie from '@/components/Serie'

export default {
  data() {
    return {
      msg: 'Hello Home',
      search: '',
      series: []
    }
  },
  created() {
    seriesService.getSeries().then(res => this.series = res.data.map(item => item.show))
  },
  methods: {
    toggleFav: function (serie) {
      !this.$store.state.favorites.find(item => item.id === serie.id) ?
        this.$store.commit('addFavorite', serie) : this.$store.commit('removeFavorite', serie)
    }
  },
  components: {
    serie: Serie
  },
  computed: {
    filteredSeries: function () {
      return this.search === '' ? this.series : this.series.filter(serie => serie.name.toLowerCase().includes(this.search.toLowerCase()))
    }
  }
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>