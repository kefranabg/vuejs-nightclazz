import Vue from 'vue'

export default {
    /**
     * Get series from tvmaze
     */
    getSeries: () => {
        return Vue.http.get('http://api.tvmaze.com/search/shows?q=bad')
    }
}