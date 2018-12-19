<template>
<div>
    <!-- <router-link :to="{ path: 'edit', query: { post: post.id }}" append>edit</router-link>  -->
    <a v-show="!editContent" @click="showEditor" >edit</a> 
    <a v-show="isChanged" @click="save">save</a> 
    <a v-show="editContent" @click="closeEditor">close</a> 
        <div
            v-show="!editContent"
            v-html="post.content"
        ></div>
        <tinymce id="d1"
            v-show="editContent"
            v-model="editContent"
        ></tinymce>
</div>
</template>

<script>

import tinymce from 'vue-tinymce-editor'

export default {
    components: {tinymce},
    data() {
        return {
            editContent: '',
        }
    },
    computed: {
        post() {
            let name = 'restoration'
            return this.$store.getters['ui/post'](post => post.name === name) || {name}
        },
        isChanged() {
           return  this.editContent ? this.editContent !== this.post.content : false
        }
    },
    methods: {
        showEditor() {
            this.editContent = this.post.content
        },
        closeEditor() {
            this.editContent = ''
        },
        save() {
            let post = this.post ,
                content = this.editContent 
            this.$store.dispatch('ui/savePost', {...post, content})
        },
    }
}
</script>

<style>

</style>
