<template>

<div class="breadcrumb">
    <!-- <a href="/">Главная</a> -->
    <span  v-for="(item, index) in list"
     :key="index"
    >
    <span class="bread-separator" v-show="index > 0"> &gt; </span>
    <a @click="routTo(index)"
        :class="{'linked': !!item.link}">{{item.name}}</a>
    </span>
</div>
</template>

<script>
export default {
    data() {
        return {
            list: []
        }
    },
    created() {
        this.updateList()
    },
    watch: {
        '$route'() {
            this.updateList()
        }
    },
    methods: {
        updateList(){
            this.list = this.$route.meta.breadcrumb
        },
        routTo(index) {
            let routItem = this.list[index], link = routItem.link
            if(link) this.$router.push(link)
        }
    }

}
</script>

<style>
div.breadcrumb {
    color: #333;
    font-weight: bold;
    font-size: 10px;
    margin-bottom: 5px;
    padding-left: 20px;
    padding-bottom: 0;
    padding-top: 5px;
}

#header, #footer, .mission, .breadcrumb, .node {
    clear: both;
}
.breadcrumb {
    padding-bottom: .5em;
}
.breadcrumb a {
    color: #575757;
    text-decoration: none;
    font-weight: bold;
    font-size: 10px;
}
.breadcrumb a.linked {
    color: #369;
    cursor: pointer;
    text-decoration: underline;
}
div.breadcrumb .bread-separator {
    margin-left: 5px;
    margin-right: 5px;
    color: #7d7d7d;
}
</style>
