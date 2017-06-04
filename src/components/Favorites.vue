<template>
  <div>
    <h1>{{msg}}</h1>
    <div class="container">
      <ul class="list-group">
        <serie v-for="fav in favorites" :data="fav"></serie>
      </ul>
    </div>
  </div>
</template>

<script>
import favoritesService from '@/services/favorites.service'
import Serie from '@/components/Serie'

export default {
  data() {
    return {
      msg: 'Hello Favorites',
      favorites: []
    }
  },
  mounted() {
    this.favorites = this.$store.state.favorites
  },

  components: {
    Serie
  }
}
</script>

<style scoped>

</style>