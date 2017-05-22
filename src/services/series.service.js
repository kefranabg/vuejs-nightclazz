import http from 'axios'

export default {
    getSeries: () => {
        return http.get('http://api.tvmaze.com/search/shows?q=bad')
    }
}