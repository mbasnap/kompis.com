<template>
<div>
    <!-- <router-link :to="{ path: 'edit', query: { post: post.id }}" append>edit</router-link>  -->
    <!-- <a v-show="!editContent" @click="showEditor" >edit</a> 
    <a v-show="isChanged" @click="save">save</a> 
    <a v-show="editContent" @click="closeEditor">close</a>  -->
        <div

            v-html="page.content"
        ></div>
        <!-- <tinymce id="d1"
            v-show="editContent"
            v-model="editContent"
        ></tinymce> -->
</div>
</template>

<script>
import tinymce from 'vue-tinymce-editor'


export default {
    components: {tinymce},
    name: 'restoration',
    created() {
        this.$store.dispatch('getPages')
    },
    computed: {

        page() {
            let name = this.name
           return this.$store.getters.pages[name] || {name}
        }
    },
    methods: {

        save() {
            let name = this.name, content = this.editContent
                db.save({...this.post, name, content}).then(this.addPost)
        }
    }
}
</script>

<style>

</style>
