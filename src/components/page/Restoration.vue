<template>
<div>
    <p class="editMenu">
        <a v-show="!edit" @click="showEditor" >edit</a> 
        <a v-show="!saved" @click="save(content)">save</a> 
        <a v-show="edit" @click="closeEditor">close</a>
    </p>
    <div v-show="!edit" v-html="post.content"></div>
    <tinymce id="d1"
        v-show="edit"
        v-model="content"
    ></tinymce>
</div>
</template>

<script>
import tinymce from 'vue-tinymce-editor'

import {mapActions} from 'vuex'
export default {
    components: {tinymce},
    data() {
        return {
            content: '',
            edit: false
        }
    },
    computed: {
        ...mapActions('post', ['getPost', 'updatePost']),
        query() {
            return this.$route.query
        },
        post() {
            return this.getPost(this.query.post) || {}
        },
        saved() {
            return !this.edit 
            // return !this.edit || this.content === this.page.content
        }
    },
    methods: {
        showEditor() {
            this.edit = true
            this.content = this.pageContent
        },
        closeEditor() {
            this.edit = false
        },
        save(content) {
            this.updatePost({...this.query, content})
                    .then(this.closeEditor)
        }
    }
}
</script>

<style scoped>
p.editMenu{
    position: absolute;
    right: 30px;
    z-index: 1000;
    cursor: pointer;
}

</style>
