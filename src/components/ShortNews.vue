<template>
    <div class="news-block-main">
        <div class="view-header"><p><a href="news">Новости</a></p></div>
        <div v-for="(item, index) in lastNews" :key="index">
            <div class="views-field-date">
            <span class="date-display-single" >{{item.date}}</span>
            </div>
            <div class="views-field-short-description">
            <a :href="item.href">{{item.title}}</a>
            </div> 
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
computed: {
    ...mapState('ui', ['lastNews']),
},

}
</script>

<style>
div.news-block-main {
    padding-top: 10px;
    padding-bottom: 10px;
    width: 240px;
    margin-bottom: 20px;
    padding-left: 5px;
}
div.news-block-main div.view-header {
    border-bottom: 1px solid #d3d3d3;
}
div.news-block-main div.view-header p {
    margin: 0;
    padding: 0;
}
div.news-block-main div.view-header a {
    color: #333;
    font-weight: bold;
    font-size: 20px;
    padding-top: 10px;
    text-decoration: underline;
}
div.news-block-main div.view-header a {
    color: #333;
    font-weight: bold;
    font-size: 20px;
    padding-top: 10px;
    text-decoration: underline;
}

div.news-block-main div.views-field-date {
    padding-top: 5px;
    padding-bottom: 2px;
}
div.news-block-main span.date-display-single, span.date-display-single {
    color: #666;
    font-size: 10px;
}
div.view .date-display-single {
    color: #666;
    font-size: 10px;
}
div.news-block-main div.views-field-short-description {
    line-height: .9em;
}
div.news-block-main div.views-field-short-description a {
    color: #00407f;
    text-decoration: none;
    font-size: 11px;
    font-weight: bold;
    line-height: 16px;
}
</style>
