<template>
<div id="sidebar-first" class="column sidebar first">
<div id="sidebar-first-inner" class="inner">
<div class="region region-sidebar-first">
    <div class="block-title-layer">
        <div class="block-title" id="slogan">Ремонт без проблем!</div>
    </div>
    <side-bar-menu></side-bar-menu>
    <side-bar-news></side-bar-news>
</div>
</div>
</div>
</template>

<script>
import SideBarMenu from './SideBarMenu'
import SideBarNews from './News'
export default {
    components: {SideBarMenu, SideBarNews}
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
.node-type-page #sidebar-first {
    /* padding-top: 20px; */
}
#slogan {
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
#sidebar-first {
    width: 270px;
    margin-right: -270px;
    padding-top: 10px;
}
.sidebar {
    float: left;
}
div.region-sidebar-first {
    padding-right: 20px;
}

#block-menu-menu-all-from-one, #block-block-17 {
    padding-left: 5px;
    margin-bottom: 15px;
}

#block-menu-menu-all-from-one .content ul, #block-block-17 .content ul {
    margin-left: -3px;
    list-style-image: none;
}
#block-menu-menu-all-from-one .content li, #block-block-17 .content li {
    list-style: none;
    background: url(/static/img/left-menu-bg.png) no-repeat;
    display: block;
    width: 244px;
    height: 64px;
    margin: 0;
    list-style-image: none;
}
#block-menu-menu-all-from-one .content li a.parts-graders, #block-block-17 .content li a.parts-graders {
    display: table-cell;
    font-size: 10.5pt;
    color: #c1c0c0;
    font-weight: bold;
    text-transform: uppercase;
    width: 164px;
    height: 59px;
    background: url(/static/img/parts-graders.png) no-repeat;
    padding-left: 50px;
    padding-right: 30px;
    background-position: 10px 50%;
    padding-top: 0;
    text-decoration: none;
    vertical-align: middle;
}
#block-menu-menu-all-from-one .content li a.sell-graders, #block-block-17 .content li a.sell-graders {
    display: table-cell;
    font-size: 10.5pt;
    color: #c1c0c0;
    font-weight: bold;
    text-transform: uppercase;
    width: 164px;
    height: 59px;
    background: url(/static/img/sell-graders.png) no-repeat;
    padding-left: 50px;
    padding-right: 30px;
    background-position: 10px 50%;
    padding-top: 0;
    text-decoration: none;
    vertical-align: middle;
}
#block-menu-menu-all-from-one .content li a.repair-graders, #block-block-17 .content li a.repair-graders {
    display: table-cell;
    font-size: 10.5pt;
    color: #c1c0c0;
    font-weight: bold;
    text-transform: uppercase;
    width: 164px;
    height: 59px;
    background: url(/static/img/repair-graders.png) no-repeat;
    padding-left: 50px;
    padding-right: 30px;
    background-position: 10px 50%;
    padding-top: 0;
    text-decoration: none;
    vertical-align: middle;
}
#block-menu-menu-all-from-one .content li a.service-graders, #block-block-17 .content li a.service-graders {
    display: table-cell;
    font-size: 10.5pt;
    color: #c1c0c0;
    font-weight: bold;
    text-transform: uppercase;
    width: 164px;
    height: 59px;
    background: url(/static/img/service-graders.png) no-repeat;
    padding-left: 50px;
    padding-right: 30px;
    background-position: 10px 50%;
    padding-top: 0;
    text-decoration: none;
    vertical-align: middle;
}
</style>
