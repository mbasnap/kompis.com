<template>
<div>
    <p class="editMenu">
        <a v-show="edit === false" @click="showEditor" >edit</a> 
        <a v-show="isChanged" @click="save(post)">save</a> 
        <a v-show="edit !== false" @click="closeEditor">close</a>
    </p>
    <div v-show="edit === false" v-html="postContent"></div>
    <tinymce id="d1" v-show="edit !== false" v-model="editContent" ></tinymce>
</div>
</template>

<script>
import tinymce from 'vue-tinymce-editor'
import {mapActions} from 'vuex'
export default {
    components: {tinymce},
    data() {
        return {
            edit: false
        }
    },
  watch: {
    $route (to, from){
        this.closeEditor()
    }
  },
    computed: {
        
        queryId() {
            let query = this.$route.query || {}
            return query.id
        },
        post() {
            let posts = this.$store.getters.posts, id = this.queryId
            return posts[id] || this.loadPost(id).then(this.updatePost)
        },
        postContent() {
            let post = this.post || {}
            return post.content
        },
        editContent: {
            get() {
                return this.edit !== false ? this.edit : ''
            },
            set(v) {
                this.edit = v
            }
        },
        isChanged() {
            return this.edit !==false && this.edit !== this.postContent
        }
    },
    methods: {
        ...mapActions(['loadPost', 'savePost', 'updatePost']),
        showEditor() {
            this.edit = this.postContent
        },
        closeEditor() {
            this.edit = false
        },
        save(post) {
            this.savePost({...post, content: this.editContent})
                .then(this.updatePost)
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
