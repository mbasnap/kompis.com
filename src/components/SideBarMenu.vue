<template>
    <div class="side-bar-menu">
        <ul>
            <li><a href="/equipments" class="parts-graders">Запчасти</a></li>
            <li><a href="/catalog" class="sell-graders">Продажа спецтехники</a></li>
            <li><a href="remont-spectehniki" class="repair-graders">Ремонт техники</a></li>
            <li><a href="obsluzhivanie" class="service-graders">Техническое обслуживание</a></li>
        </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState('ui', ['sideBarMenu'])
    }
}
</script>

<style>

.side-bar-menu li {
    list-style: none;
    background: url(/static/img/left-menu-bg.png) no-repeat;
    display: block;
    width: 244px;
    height: 64px;
    margin: 0;
    list-style-image: none;
}
.side-bar-menu li a.parts-graders {
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
.side-bar-menu li a.sell-graders {
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
.side-bar-menu li a.repair-graders {
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
.side-bar-menu li a.service-graders {
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
