<template>
<div id="header">
    <div id="header-wrapper">
        <logo></logo>
        <main-menu></main-menu>
        <searcher></searcher>
    </div>
</div>

</template>

<script>
import Logo from './header/Logo'
import MainMenu from './menu/MainMenu'
import Searcher from './searcher/Searcher'
export default {
    components: {Logo, MainMenu, Searcher}

}
</script>

<style>
#header {
    height: 86px;
    background: url(/static/img/header-bg.png) repeat-x;
}
#header, #footer, .mission, .breadcrumb, .node {
    clear: both;
}
#header-wrapper {
    width: 980px;
    margin: 0 auto;
    background: url(/static/img/logo.png);
    background-repeat: no-repeat;
    height: 80px;
    position: relative;
}
#block-system-main-menu {
    background-position: bottom;
    margin: 0;
    padding: 0;
    float: right;
    background: url(/static/img/menu_top_bg_line.png) no-repeat;
    background-position: 2px 100%;
    position: absolute;
    bottom: -6px;
    right: 0;
}
</style>
