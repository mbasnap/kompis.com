<template>
    <div>
         <a class="save" @click="savePost">save</a>
        <quill-editor v-model="post.content"
                    @change="onEditorChange($event)"
                      :options="editorOption">
        </quill-editor>
    </div>
</template>

<script>
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
    import { quillEditor, Quill } from 'vue-quill-editor'
    import { ImageDrop } from 'quill-image-drop-module'
    import ImageResize from 'quill-image-resize-modul'
    console.log(ImageResize)
    Quill.register('modules/imageDrop', ImageDrop)
    // Quill.register('modules/imageResize', ImageResize)
    import {mapState} from 'vuex'

export default {
    components: {quillEditor},
    data() {
        return {
        content: '',
        editorOption: {
        theme: 'bubble',
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline'],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'font': [] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'align': [] }],
              ['clean'],
              ['link', 'image', 'video']
            ],
            history: {
              delay: 1000,
              maxStack: 50,
              userOnly: false
            },
            imageDrop: true,
            // imageResize: {
            //   displayStyles: {
            //     backgroundColor: 'black',
            //     border: 'none',
            //     color: 'white'
            //   },
            //   modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
            // }
          }
        }
        }
    },

    computed: {
        ...mapState('ui', ['posts']),
        post: {
            get() {
                let query = this.$route.query,
                byId = ({id}) => id === query.post
                return this.posts.find(byId) || {}
            }
        }
    },
    methods: {
        savePost(evt) {
            let post = this.post, content = this.content
            this.$store.dispatch('ui/savePost', {...post, content})
        },
        onEditorChange({html}) {
            console.log(html)
            this.content = html
        }
    }
}
</script>
<style scoped>
a.save{
    position: absolute;
    right: 30px;
    z-index: 1000;
    cursor: pointer;
}

</style>

