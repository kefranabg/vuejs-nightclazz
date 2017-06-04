import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favorites: []
  },
  mutations: {
    /**
     * Add a favorite to the list
     */
    addFavorite (state, fav) {
        state.favorites = [...state.favorites, fav]
    },
    /**
     * Remove a favorite from the list
     */
    removeFavorite (state, fav) {
        const index = state.favorites.findIndex(item => item.id === fav.id)
        state.favorites = [...state.favorites.slice(0, index), ...state.favorites.slice(index + 1)]
    }
  }
})
