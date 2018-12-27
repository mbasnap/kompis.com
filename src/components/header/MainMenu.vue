<template>
<div  class="block main-menu">


    <nav>
        <ul class="menu">
            <li class="first">
                <router-link to="/">ГЛАВНАЯ</router-link>
            </li>  
            <li v-for="(item,index) in mainMenu" :key="index" > 
                <router-link :to="routeFrom(item)" >{{item.title}}</router-link>
            </li>
        </ul>
    </nav>

</div>

</template>

<script>

export default {
computed: {
    mainMenu() {
        let {getters, dispatch} = this.$store
        return getters['mainMenu']
          || dispatch('getMainMenu')
    } 
},
methods: {
    routeFrom({name, post_id}) {
        return !post_id ? name : name + "?id=" + post_id
    }
}
}
</script>

<style>
.block.main-menu {
    background-position: bottom;
    margin: 0;
    padding: 0;
    /* float: right; */
    background: url(/static/img/menu_top_bg_line.png) no-repeat;
    background-position: 2px 100%;
    position: absolute ;
    bottom: -6px;
    left: 265px;
}
.block.main-menu  ul.menu {
    margin: 0;
    padding: 0;
    list-style: none;
    margin-top: 1px;
    border: 0;
    text-align: left;
}
.block.main-menu  ul.menu li {
    margin: 0;
    padding: 0;
    list-style: none;
    float: left;
}

.block.main-menu ul.menu li a {
    font: bold 8pt Arial;
    color: #fff;
    text-decoration: none;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 5px 5px 0 0;
    -webkit-border-radius: 5px 5px 0 0;
    /* behavior: url(//tdc.ua/sites/all/themes/basic/css/pie/PIE.htc); */
    margin-left: 2px;
    background: url(/static/img/menu-bg.png);
    background-repeat: repeat-x;
    height: 30px;
    display: block;
    margin-top: 6px;
    line-height: 30px !important;
    letter-spacing: normal;
    cursor: pointer;
}
.block.main-menu ul.menu li a:hover {
    background: url(/static/img/kompis-menu-bg-hover.png);
    color: #fff;
}
.block.main-menu ul.menu li a.router-link-active {
    background: url(/static/img/menu-bg-active.png);
    color: #000;
}
.block.main-menu  ul.menu li.first a {
    background: url(/static/img/domik.png);
    background-repeat: no-repeat;
    width: 26px;
    font-size: 0;
}
.block.main-menu ul.menu li.first a.router-link-exact-active,
.block.main-menu ul.menu li.first a:hover {
    background: url(/static/img/domik_active.png);
    background-repeat: no-repeat;
    width: 26px;
    font-size: 0;
}



</style>
