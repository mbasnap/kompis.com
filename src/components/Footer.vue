<template>
<div class="footer clearfix">
    <div class="block adress ">
        <div>
            <p><em>Адрес:</em> <strong>{{adress.country}} , {{adress.provance}} обл., </strong></p>
            <p><strong>г. {{adress.sity}}, ул. {{adress.srteet}}, {{adress.house}}</strong></p>	
        </div>
    </div> 
<!-- /block-inner /block -->
<div  class="block phones ">
    <div>
    <p><em>Тел.:</em><strong>{{getPhone(0)}}</strong></p>
    <p><strong>{{getPhone(1)}}</strong></p>
    </div>
</div> 
<div v-show="" class="block fax ">
    <div>
        <p><em>Факс:</em> <strong>+38 (04594) 7-21-37</strong></p>
    </div>
</div>
<div class="block mail ">
<div > <em>E-mail:</em> <strong>{{mails[0]}}</strong> </div>
</div>

</div>

</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState} = createNamespacedHelpers('settings');
export default {
    computed: {

    ...mapState(['phones', 'mails', 'adress', 'fax'])
    },
    methods: {
        getPhone(index){
            let phone = this.phones[index]
            return phone.kod + ' ' + phone.number
        }
    }
}
</script>

<style>
.footer {
    background: url(/static/img/footer-bg-1.png) repeat-x;
    margin: 0 auto;
    padding-bottom: 10px;
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
    width: 200px;
    background: url(/static/img/home.png) center 20px no-repeat;
}
.footer .block.fax {
    background: url(/static/img/fax.png) center 20px no-repeat;
}
.footer .block.mail {
    background: url(/static/img/mail.png) center 20px no-repeat;
}


.footer .block.logo {
    float: left;
    width: 244px;
    height: 96px;
    margin: 12px 0 0 0;
    background: url(/static/img/footer-logo-bg.png) no-repeat;
}
</style>
