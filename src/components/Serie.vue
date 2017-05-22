<template>
    <li class="list-group-item">
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
export default {
    props: ['data']
}
</script>

<style scoped>
.media {
    text-align: left;
}

.media-object {
    height: 64px;
}
</style>