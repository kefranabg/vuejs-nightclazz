export default {
    /**
     * List of favorites
     */
    list: new Array(),
    /**
     * Add a favorite to the list
     */
    addFavorite: function(fav) {
        this.list.push(fav)
    },
    /**
     * Remove a favorite from the list
     */
    removeFavorite: function(fav) {
        const index = this.list.findIndex(item => item.id === fav.id)
        this.list.splice(index, 1)
    }
}