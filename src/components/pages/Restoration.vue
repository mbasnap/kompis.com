<template>
 <div class="column center">
    <div class="page-title-layer">
        <h1 class="title">{{header}}</h1>
    </div>
        <div>
            <p> <img :alt="img.alt" :src="img.src"
                style="width: 340px; height: 220px; float: right; margin-left: 5px; margin-right: 5px;">
            </p>
            <p>{{content}}</p>
            <p>{{after}}</p>  
        </div>
</div>
    </template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState('restoration',['header','img', 'content', 'after'])
    }
}
</script>
<style>

</style>

