import http from 'axios'

export default {
    /**
     * Get series from tvmaze
     */
    getSeries: () => {
        return http.get('http://api.tvmaze.com/search/shows?q=bad')
    }
}