<template>
    <div>
         <a class="save" @click="savePost">save</a>
         <tinymce id="d1"
                 v-model="post.content"
                 @editorChange="onEditorChange"
                 ></tinymce>
         <!-- <VueTrix v-model="post.content"/> -->
         <!-- <tiny-mce id="description" v-model="post.content"></tiny-mce> -->
        <!-- <quill-editor v-model="post.content"
                    @change="onEditorChange($event)"
                      :options="editorOption">
        </quill-editor> -->
    </div>
</template>

<script>
    // import 'quill/dist/quill.core.css'
    // import 'quill/dist/quill.snow.css'
    // import 'quill/dist/quill.bubble.css'
    // import { quillEditor, Quill } from 'vue-quill-editor'
    //  import { ImageDrop } from 'quill-image-drop-module'
    //  import ImageResize from 'quill-image-resize-modul'
    //  Quill.register('modules/imageDrop', ImageDrop)
    //  Quill.register('modules/imageResize', ImageResize)
    import {mapState} from 'vuex'
    import tinymce from 'vue-tinymce-editor'
    // import VueTrix from 'vue-trix'
    // import TinyMCE from 'tinymce-vue-2'
// let Inline = Quill.import('blots/inline');

// class SpanBlock1 extends Inline{    

//     static create(value){
//         let node = super.create();
//         node.setAttribute('class','spanblock');
//         return node;    
//     } 
// }

// SpanBlock1.blotName = 'spanblock1';
// SpanBlock1.tagName = 'span';
// Quill.register(SpanBlock1);

export default {
    components: {
        // quillEditor,
        // VueTrix,
        // TinyMCE,
        tinymce
        },
    data() {
        return {
        content: '',
        // editorOption: {
        // theme: 'bubble',
        //   modules: {
        //     toolbar: [
        //       ['bold', 'italic', 'underline'],
        //       [{ 'size': ['small', false, 'large', 'huge'] }],
        //       [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        //       [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        //       [{ 'font': [] }],
        //       [{ 'color': [] }, { 'background': [] }],
        //       [{ 'align': [] }],
        //       ['clean'],
        //       ['link', 'image', 'video']
        //     ],
        //     history: {
        //       delay: 1000,
        //       maxStack: 50,
        //       userOnly: false
        //     },
            //  imageDrop: true,
            //   imageResize: {
            //     displayStyles: {
            //       backgroundColor: 'black',
            //       border: 'none',
            //       color: 'white'
            //     },
            //     modules: [ 
            //         'Resize', 
            //         'DisplaySize', 
            //          'Toolbar' 
            //         ]
            //   }
        //   }
        // }
        }
    },

    computed: {
        ...mapState('ui', ['posts']),
        post: {
            get() {
                let query = this.$route.query,
                byId = ({id}) => id === query.post
                return this.posts.find(byId) || {}
            },
            set(v) {
                console.log(v)
            }
        }
    },
    methods: {
        savePost(evt) {
            let post = this.post, content = this.content
            this.$store.dispatch('ui/savePost', {...post, content})
        },
        onEditorChange({level}) {
            this.content = level.content
            console.log(level.content)
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

