<template>
<div class="column sidebar">
    <div class="slogan " >{{slogan}}</div>
    <side-bar-menu></side-bar-menu>
    <short-news></short-news>
</div>
</template>

<script>
import SideBarMenu from './SideBarMenu'
import ShortNews from './ShortNews'
import {mapState} from 'vuex'
export default {
    components: {SideBarMenu, ShortNews},
    computed: {
        ...mapState('ui', ['company']),
        slogan() {
            let conpany = this.company || {}
            return conpany.slogan
        }
     }
}
</script>

<style>
/* @import url(http://allfont.ru/allfont.css?fonts=carolina); */
@font-face {
    font-family: 'Carolina';
    font-style: normal;
    font-weight: 400;
    src: url(/static/fonts/carolina.ttf);
}

.slogan {
    border-bottom: 1px solid #d3d3d3;
    color: #6f6f6f;
        font-family: 'Carolina', arial;
        font-size: 36px;
        /* text-shadow: 4px 4px 4px #aaa; */
    font-weight: bold;
    margin-bottom: 10px;
    padding-top: 10px;
    padding-bottom: 20px;
    text-decoration: none;
}

.sidebar {
    width: 270px;
    margin-right: -270px;
    padding-top: 10px;
    float: left;
}



</style>
