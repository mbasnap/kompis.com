<template>
<div class="footer clearfix">
    <div class="block adress ">
        <div>
            <p><em>Адрес:</em> <strong>Украина, Киевская обл., </strong></p>
            <p><strong>г. Бровары, ул. Металлургов, 17</strong></p>	
        </div>
    </div> 
<!-- /block-inner /block -->
<div  class="block phones ">
    <div>
    <p><em>Тел.:</em> <strong>{{phone(0)}} </strong></p>
    <p> <strong>{{phone(1)}}</strong></p>
    </div>
</div> 
<div class="block fax ">
<div>
<p><em>Факс:</em> <strong>+38 (04594) 7-21-37</strong></p>
</div>
</div>
<div class="block mail ">
<div > <em>E-mail:</em> <strong>{{mail}}</strong> </div>
</div>

</div>

</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState} = createNamespacedHelpers('settings');
export default {
    computed: {
    ...mapState( {
      phone: state => index => state.phones[index],
      mail: state => state.mails[0]
    })
    },
    methods: {

    }
}
</script>

<style>
.footer {
    background: url(/static/img/footer-bg-1.png) repeat-x;
    margin: 0 auto;
    padding-bottom: 10px;
}
#block-block-2 {
    background: url(/static/img/home.png) center 20px no-repeat;
}
#block-block-2, #block-block-3, #block-block-4, #block-block-5 {
    float: left;
    padding: 55px 0 0 0;
    width: 184px;
}

#block-block-2 div.content p, #block-block-3 div.content p, #block-block-4 div.content p, #block-block-5 div.content p {
    margin: 0;
}
.footer .block{
    width: 184px;
    float: left;
    padding: 55px 0 0 0;
   
}

.footer .block div{
    background: url(/static/img/footer-block-line.png) center top no-repeat;
    padding: 18px 0 0 0;
    font: 11px Arial;
    color: #e6e6e6;
    text-align: center;
}
.footer .block  p{
    margin: 0;
}
.footer .block.phones{
    background: url(/static/img/phone.png) center 20px no-repeat;
}
.footer .block.adress{
background: url(/static/img/home.png) center 20px no-repeat;
}
.footer .block.fax {
    background: url(/static/img/fax.png) center 20px no-repeat;
}

/* #block-block-2 div.content, #block-block-3 div.content, #block-block-4 div.content, #block-block-5 div.content {
    background: url(/static/img/footer-block-line.png) center top no-repeat;
    padding: 18px 0 0 0;
    font: 11px Arial;
    color: #e6e6e6;
    text-align: center;
} */
.footer .block.logo {
    float: left;
    width: 244px;
    height: 96px;
    margin: 12px 0 0 0;
    background: url(/static/img/footer-logo-bg.png) no-repeat;
}
</style>
