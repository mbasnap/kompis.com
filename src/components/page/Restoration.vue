<template>
<div>
    <router-link :to="{ path: 'edit', query: { post: post.id }}" append>edit</router-link> 
    <div v-html="post.content"></div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState('ui', ['posts']),
        post() {
            let routeName = this.$route.name,
            byName = ({name}) => name === 'restoration'
               return this.posts.find(byName) || {}
        }
    },
}
</script>

<style>
.ql-align-center {
    text-align: center;
}
</style>
