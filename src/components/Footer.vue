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
    <p><em>Тел.:</em><strong>{{phones[0]}}</strong></p>
    <p><strong>{{phones[1]}}</strong></p>
    </div>
</div> 
<div class="block fax ">
    <div>
        <p><em>Факс:</em> <strong>{{fax}}</strong></p>
    </div>
</div>
<div class="block mail ">
<div > <em>E-mail:</em> <strong>{{mailes[0]}}</strong> </div>
</div>

</div>

</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState('ui', ['company']),
        address(){
            let company = this.company || {}
            return company.address || {}
        },
        mailes(){
            let company = this.company || {},
            mailes = company.mailes || []
            return mailes.map(item => item.mail) 
        },
        fax(){
            let company = this.company || {},
            fax = company.fax || {}
            return fax.kod + ' ' + fax.number
        },
        phones(){
            let company = this.company || {},
            phones = company.phones || []
            return phones.map(item => item.kod + ' ' + item.number) 
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
