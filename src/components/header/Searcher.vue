<template>
 <div id="block-simplesearch-simplesearch" class="block block-simplesearch block-even clearfix">
<div class="block-inner">
<div class="content">
<form action="obsluzhivanie" method="post" id="simplesearch-block-form" accept-charset="UTF-8">
    <div>
    <div class="container-inline">
        <div class="form-item form-type-textfield form-item-search">
<input onblur="if (this.value == '') {this.value = 'Найти:';}" onfocus="if (this.value == 'Найти:') {this.value = '';}" type="text" id="edit-search" name="search" value="Найти:" size="25" maxlength="128" class="form-text required">
</div>
<input alt="Найти:" type="image" id="edit-submit" name="submit" 
        src="/static/img/searcher.png" class="form-submit">
</div>
<input type="hidden" name="form_build_id" value="form-ecexChl-VjVuFgrhJxZGDqGRBqqdepKSvEUdYS6URjU">
<input type="hidden" name="form_id" value="simplesearch_block_form">
</div></form>	</div>
</div>
</div>   
</template>

<script>
export default {

}
</script>

<style>
#block-simplesearch-simplesearch {
    display: block;
    float: right;
    margin: 15px 0 0 0;
    padding: 0;
}
#block-simplesearch-simplesearch div.content div.form-item-search {
    display: block;
    float: left;
    margin: 0;
    padding: 0;
    background: url(/static/img/search-area.png) no-repeat scroll 0 0 rgba(0,0,0,0);
}
.block-simplesearch {
    z-index: 100;
}
#block-simplesearch-simplesearch div.content input.form-text {
    width: 194px;
    height: 28px;
    margin: 0;
    padding: 1px 10px 0 10px;
    border: 0;
    background-color: transparent;
    font: italic 12px Arial;
    color: #333;
    line-height: 28px;
}
</style>
