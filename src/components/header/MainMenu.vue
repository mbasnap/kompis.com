<template>
<div id="block-system-main-menu" class="block block-system block-menu block-even clearfix">
<div class="block-inner">
<div class="content">
    <nav>
        <ul class="menu">
        <li class="first">
            <router-link to="/">ГЛАВНАЯ</router-link>
        </li>
        <!-- <li class="leaf id- mid-342"><a href="/catalog">СПЕЦТЕХНИКА</a></li> -->
        <!-- <li class="leaf id- mid-343"><a href="/equipments">ЗАПЧАСТИ</a></li> -->
        <!-- <li class="leaf id- mid-2995"><a href="nashe-proizvodstvo">НАШЕ ПРОИЗВОДСТВО</a></li> -->
        <!-- <li class="leaf id- mid-344"><a href="remont-spectehniki">РЕМОНТ</a></li> -->
            <li >
                <router-link to="/service" >ОБСЛУЖИВАНИЕ</router-link>
            </li>
        <!-- <li class="leaf id- mid-347"><a href="/questions/all">ВОПРОСЫ И ОТВЕТЫ</a></li> -->
        <!-- <li class="leaf id- mid-348"><a href="o-kompanii">О КОМПАНИИ</a></li> -->
        <li >
                <router-link to="/contacts" >КОНТАКТЫ</router-link>
        </li>
        </ul>
    </nav>
</div>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style>
#block-system-main-menu div.content ul.menu {
    margin: 0;
    padding: 0;
    list-style: none;
    margin-top: 1px;
}
#block-system-main-menu div.content ul.menu li a.router-link-active {
    background: url(/static/img/menu-bg-active.png);
    color: #000;
}
ul.menu {
    border: 0;
    list-style: none;
    text-align: left;
}
#block-system-main-menu div.content ul.menu li {
    margin: 0;
    padding: 0;
    list-style: none;
    float: left;
}
#block-system-main-menu div.content ul.menu li a:hover {
    background: url(/static/img/menu-bg-hover.png);
    color: #fff;
}
#block-system-main-menu div.content ul.menu li.first a {
    background: url(/static/img/domik.png);
    background-repeat: no-repeat;
    width: 26px;
    font-size: 0;
}
#block-system-main-menu div.content ul.menu li.first a.router-link-exact-active,
 #block-system-main-menu div.content ul.menu li.first a:hover {
    background: url(/static/img/domik_active.png);
    background-repeat: no-repeat;
    width: 26px;
    font-size: 0;
}
#block-system-main-menu div.content ul.menu li a {
    font: bold 8pt Arial;
    color: white;
    text-decoration: none;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 5px 5px 0 0;
    -webkit-border-radius: 5px 5px 0 0;
    behavior: url(//tdc.ua/sites/all/themes/basic/css/pie/PIE.htc);
    margin-left: 1px;
    background: url(//tdc.ua/sites/all/themes/basic/images/menu-bg.png);
    background-repeat: repeat-x;
    height: 30px;
    display: block;
    margin-top: 6px;
    line-height: 30px !important;
    letter-spacing: normal;
    cursor: pointer;
}
#block-system-main-menu div.content ul.menu li {
    margin: 0;
    padding: 0;
    list-style: none;
    float: left;
}

#block-system-main-menu div.content ul.menu li a {
    font: bold 8pt Arial;
    color: #fff;
    text-decoration: none;
}

</style>
