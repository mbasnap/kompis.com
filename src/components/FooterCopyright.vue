<template>
<div id="footer-copyright-wrapper">
<p>® 2012-2016 Группа компаний ТДС. Все права защищены | Продажа, обслуживание и ремонт спецтехники.
     Продажа запасных частей.
</p>
<div class="imcopy">Разработано в <span>Industrial Media</span> <a>
    <img
     src="/static/img/im_ico.png" alt="">
</a>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style>
#footer-copyright {
    height: 28px;
    background: url(/static/img/footer-bg-2a.png) repeat-x;
}
#footer-copyright-wrapper {
    width: 980px;
    margin: 0 auto;
    padding: 5px 0 0 0;
    font-size: 8.25pt;
    color: #333;
}
#footer-copyright-wrapper p {
    margin: 0;
    float: left;
}
.imcopy {
    color: #a28101;
    font-size: 10px;
    float: right;
    position: relative;
    padding-right: 30px;
    line-height: 17px;
    right: 20px;
}
.imcopy span {
    color: #333;
}
.imcopy img {
    position: absolute;
    top: -2px;
    right: 0;
}
</style>
