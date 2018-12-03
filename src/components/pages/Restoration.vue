<template>
    <div  v-html="post.content"></div>
</template>

<script>
import {mapState} from 'vuex'
export default {

    computed: {
        ...mapState(['posts']),
        post() {
            return this.posts.find(this.byName) || {}
        }
    },
    methods: {
        byName(item) {
            return item.name === this.$route.name
        }
    }
}
</script>
<style>

</style>

