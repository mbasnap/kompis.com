<template>
    <div  v-html="post.content"></div>
</template>

<script>
import {mapState} from 'vuex'
export default {

    computed: {
        ...mapState('ui', ['posts']),
        post() {
            let routeName = this.$route.name,
            byName = ({name}) => name === routeName
               return this.posts.find(byName) || {}
        }
    }
}
</script>
<style>

</style>

