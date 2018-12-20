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
        <!-- <tinymce id="d1"
            v-show="editContent"
            v-model="editContent"
        ></tinymce> -->
</div>
</template>

<script>
import tinymce from 'vue-tinymce-editor'
import {mapActions, mapGetters} from 'vuex'
import DataBase from '@/db'
const db = new DataBase('post')

export default {
    components: {tinymce},
    created() {
              
        // if(!this.post) db.get({name: this.name}).then(this.addPost)        
    },
    data() {
        return {
            name: 'restoration',
            editContent: '',
        }
    },
    computed: {
        ...mapActions(['addPost']),
        ...mapGetters(['getPost']),
        post() {
            let post = this.getPost(post => post.name = this.name)
           return post || db.get({name: this.name}).then(res => {
               console.log(res)
           })
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
            let name = this.name, content = this.editContent
                db.save({...this.post, name, content}).then(this.addPost)
        },
    }
}
</script>

<style>

</style>
