<template>
 <div class="column center">
    <div class="page-title-layer">
        <h1 class="title">{{header}}</h1>
    </div>
        <div v-html="content">
            
        </div>
</div>
    </template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    created() {
        this.update
    },
    computed: {
        ...mapState('restoration',['header','content']),
        ...mapActions('restoration',['update'])
    }
}
</script>
<style>

</style>

