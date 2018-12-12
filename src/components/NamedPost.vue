<template>
    <div>
        <quill-editor v-model="content"
                      :options="editorOption">
        </quill-editor>
    <!-- <medium-editor
      v-if='show'
      :text='post.content'
      :options='options'
      v-on:edit='applyTextEdit'/> -->

    </div>
</template>

<script>
  import VueQuillEditor, { Quill } from 'vue-quill-editor'
  import { ImageDrop } from 'quill-image-drop-module'
  import ImageResize from 'quill-image-resize-module'
  Quill.register('modules/imageDrop', ImageDrop)
  Quill.register('modules/imageResize', ImageResize)
import editor from 'vue2-medium-editor'
import {mapState} from 'vuex'
export default {
    components: {
        'medium-editor': editor
    },
    data() {
        return {
            text: 'asaDSADAS',
            content: 'dsadas',
            show: true,
        editorOption: {
          modules: {
            toolbar: [
              [{ 'size': ['small', false, 'large'] }],
              ['bold', 'italic'],
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
              ['link', 'image']
            ],
            history: {
              delay: 1000,
              maxStack: 50,
              userOnly: false
            },
            imageDrop: true,
            imageResize: {
              displayStyles: {
                backgroundColor: 'black',
                border: 'none',
                color: 'white'
              },
              modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
            }
          }
        },
            options: {
                // toolbar: false,
                // disableEditing: true,
                buttons: ['bold', 'italic', 'underline', 'anchor'],
                anchor: {
                    /* These are the default options for anchor form,
                    if nothing is passed this is what it used */
                    customClassOption: 'alink',
                    customClassOptionText: 'Button',
                    linkValidation: false,
                    placeholderText: 'YOYOYO',
                    targetCheckbox: false,
                    targetCheckboxText: 'Open in new window'
                }
            }
        }
    },
    computed: {
        ...mapState('ui', ['posts']),
        post() {
            let routeName = this.$route.name,
            byName = ({name}) => name === routeName
               return this.posts.find(byName) || {}
        }
    },
    methods: {
    applyTextEdit (ev) {
      console.log(ev)
      if (ev.event.target) {
        console.log(ev.event.target.innerHTML)
        this.text = ev.event.target.innerHTML
      }
    }
    }
}
</script>
<style>

</style>

