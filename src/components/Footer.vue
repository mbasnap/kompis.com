<template>
<div class="footer clearfix">
    <div class="block adress ">
        <div>
            <p><em>Адрес:</em> <strong>{{address.country}} , {{address.province}} обл., </strong></p>
            <p><strong>г. {{address.city}}, ул. {{address.street}}, {{address.home}}</strong></p>	
        </div>
    </div> 
<!-- /block-inner /block -->
<div  class="block phones ">
    <div>
    <p><em>Тел.:</em><strong>{{phone}}</strong></p>
    <!-- <p><strong>{{phone}}</strong></p> -->
    </div>
</div> 
<div class="block fax ">
    <div>
        <p><em>Факс:</em> <strong>{{fax}}</strong></p>
    </div>
</div>
<div class="block mail ">
<div > <em>E-mail:</em> <strong>{{mail}}</strong> </div>
</div>

</div>

</template>

<script>
import { mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters('ui', ['companyPhones', 'companyMailes', 'companyAddress']),
        phone() {
            let {kod, number} = this.companyPhones[0] || {}
            return kod + ' ' + number
        },
        fax() {
            let {kod, number} =  this.companyPhones[0] || {}
            return kod + ' ' + number
        },
        mail() {
            let {mail} =this.companyMailes[0] || {}
            return mail
        },
        address() {
            return this.companyAddress || {}
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
