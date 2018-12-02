<template>
    <div  v-html="getContent"></div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState(['content']),
        getContent(){
            return this.content[this.$route.name] || this.update()
        }
    },
    methods: {
        update() {
            this.$store.dispatch('updateContent', this.$route.name)
        }
    }
}
</script>
<style>

</style>

