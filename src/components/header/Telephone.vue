<template>
    <div class="header-phone block  clearfix">
        <div class="header-phone-block">
            <span class="header-phone-block-code">{{companyPhone.kod}}</span>
            <span class="header-phone-block-number">{{companyPhone.number}}</span>
        </div>
        <div class="header-mail-block">
            <span class="header-mail-block-code"><em>E-mail:</em> </span>
            <span class="header-mail-block-number"><strong>{{companyMail.mail}}</strong></span>
        </div>

    </div>
</template>

<script>
import { mapGetters} from 'vuex';
export default {
    computed: {
         ...mapGetters('ui', ['companyPhones', 'companyMailes']),
         companyPhone() {
             return this.companyPhones[0] || {}
         },
         companyMail() {
             return this.companyMailes[0] || {}
         }
    },
    methods: {

    }
}
</script>

<style>
.header-phone {
    float: right;
    right: 50px;
    height: 48px;
    margin-top: 10px;
}

.header-phone-block {
    font-family: 'ErasBoldITCRegular';
    padding-top: 10px;
}
.header-phone-block .header-phone-block-code {
    font-size: 13.5pt;
    color: #cac9c8;
}
.header-phone-block .header-phone-block-number {
    
    font-size: 15.75pt;
    color: #fff;
    margin-left: 5px;
}
.header-mail-block .header-mail-block-code {
    font-size: 9.5pt;
    color: #cac9c8;
}
.header-mail-block .header-mail-block-number {
    cursor: pointer;
    font-size: 9.75pt;
    color: #fff;
    margin-left: 5px;
}
</style>
