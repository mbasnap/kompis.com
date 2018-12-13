<template>
  <div id="app" >
    <div id="page" class="page">   
        <mba-header></mba-header>
        <bread-crumb></bread-crumb>
        <div id="content-wrapper" class="clearfix">
            <div id="content">
                <!-- <router-view class="center"/> -->
                <router-view  class="center"/>
                <!-- <div class="center" v-html="getContent" v-else></div> -->
            </div>
            <left-side-bar></left-side-bar>
        </div>
            <mba-footer></mba-footer>
            <!-- <footer-copyright></footer-copyright> -->
    </div>
  </div>
</template>

<script>

import MbaHeader from './components/Header'
import LeftSideBar from './components/LeftSideBar'

import BreadCrumb from './components/BreadCrumb'
import MbaFooter from './components/Footer'
import FooterCopyright from './components/FooterCopyright'
export default {
  name: 'App',
  components: {MbaHeader, LeftSideBar, MbaFooter, FooterCopyright, BreadCrumb},
  created(){
    this.$store.dispatch('ui/init')
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
body {
    margin: 0;
    font: 9pt/1.5em Arial,sans-serif;
    letter-spacing: 0;
    line-height: 18px;
}
html, body {
    margin: 0;
    padding: 0;
    height: 100%;
}
div.block {
    position: relative;
}

table {
    width: 99%;
}
table {
    border-collapse: collapse;
}
tbody {
    border-top: 1px solid #ccc;
}
tr.odd {
    background-color: white;
}
tr.even, tr.odd {
    background-color: #eee;
    border-bottom: 1px solid #ccc;
    padding: .1em .6em;
}
tr.even td, tr.odd td {
    padding: 10px 5px;
}
tr.even td, tr.odd td {
    padding: 10px 5px;
}
#page {
    margin: 0 auto;
    min-height: 100%;
    height: auto !important;
    height: 100%;
}
#page, #footer {
    position: relative;
}
.page-title-layer h1 {
    margin-top: 5px;
    margin-bottom: 5px;
}

h1.title {
    color: #333;
    font-size: 14pt;
    font-weight: bold;
    padding-bottom: 5px;
}
h1 {
    font-size: 2.2em;
    font-weight: 300;
    padding: 0 0 .5em;
    margin: 0;
}
h1, h2, h3, h4, h5, h6 {
    line-height: 1.3em;
}
.container-inline div, .container-inline label {
    display: inline;
}
#main-wrapper {
    width: 980px;
    margin: 0 auto;
}
#content-wrapper {
    clear: both;
}
.two-sidebars .center, .sidebar-first .center {
    margin-left: 270px;
}

.two-sidebars .center, .sidebar-first .center {
    margin-left: 270px;
}

.inner {
    padding: 0;
}

#content {
    float: left;
    width: 100%;
    margin-right: -100%;
    padding: 0;
    padding-top: 0;
}

.inner {
    padding: 0;
}
.form-item, .form-actions {
    margin-top: 1em;
    margin-bottom: 1em;
}
form {
    margin: 0;
    padding: 0;
}
.region {
    padding-bottom: 3px;
}

p {
    margin: 0 0 1em 0;
}
a:visited {
    color: #369;
}
a {
    color: #00407f;
    text-decoration: underline;
}
img {
    border: 0;
}
.clearfix {
    display: block;
}
.clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
</style>
