<template>
    <li class="list-group-item" @click="clicked(data)">
        <i class="glyphicon star" :class="[isFav ? 'glyphicon-star' : 'glyphicon-star-empty']"></i>
        <div class="media">
            <div class="media-left" v-if="data && data.image">
                <img class="media-object" :src="data.image.medium">
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{data.name}}</h4>
                <div v-html="data.summary"></div>
            </div>
        </div>
    </li>
</template>

<script>
import favoritesService from '@/services/favorites.service'

export default {
    props: [
        'data',
    ],
    data () {
        return {
            list: favoritesService.list
        }
    },
    methods: {
        clicked: function (serie) {
            this.$emit('clicked', serie)
        }
    },
    computed: {
        isFav: function () {
            return this.$store.state.favorites.find(item => item.id === this.data.id)
        }
    },
}
</script>

<style scoped>
.list-group-item {
    position: relative
}

.star {
    position: absolute;
    right: 10px;
    top: 10px;
}

.media {
    text-align: left;
}

.media-object {
    height: 64px;
}
</style>