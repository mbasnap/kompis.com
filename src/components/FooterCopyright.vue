<template>
<div class="footer-copyright-wrapper">
<em>® 2012-2018 ООО"Компис" | Обслуживание и ремонт спецтехники.
     Продажа запасных частей.
</em>
<div class="imcopy">
    <a>
        <img src="/static/img/im_ico.png" alt="">
    </a>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style>

.footer-copyright-wrapper {
    height: 28px;
    background: url(/static/img/footer-bg-2a.png) repeat-x;
    /* width: 980px; */
    margin: 0 auto;
    padding: 5px 0 0 0;
    font-size: 8.25pt;
    color:  rgb(10, 10, 10);
}
.footer-copyright-wrapper em {
    padding-left: 10px;
    float: left;
}
.imcopy {
    color:rgb(10, 10, 10);
    font-size: 10px;
    float: right;
    position: relative;
    padding-right: 30px;
    line-height: 17px;
    right: 20px;
}
.imcopy span {
    color: rgb(10, 10, 10);
}
.imcopy img {
    position: absolute;
    top: -2px;
    right: 0;
}
</style>
