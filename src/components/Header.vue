<template>
<div id="header">
    <div id="header-wrapper">
        <logo></logo>
        <main-menu></main-menu>
        <!-- <searcher></searcher> -->
        <telephone></telephone>
    </div>
</div>

</template>

<script>
import Logo from './header/Logo'
import MainMenu from './header/MainMenu'
import Searcher from './header/Searcher'
import Telephone from './header/Telephone'
export default {
    components: {Logo, MainMenu, Searcher, Telephone}

}
</script>

<style>
#header {
    height: 86px;
    background: url(/static/img/kompis-header-bg.png) repeat-x;
}
#header, #footer, .mission, .breadcrumb, .node {
    clear: both;
}
#header-wrapper {
    width: 980px;
    margin: 0 auto;
    background-repeat: no-repeat;
    height: 80px;
    position: relative;
}


.header-phone-block-link {
    float: right;
    margin-right: 25px;
}
.header-phone-block-link a {
    color: #FFF;
}
</style>
