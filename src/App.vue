<template>
  <div id="app" >
    <div id="page" class="page">
      <mba-header></mba-header>
    <router-view/>

    </div>
  </div>
</template>

<script>
import MbaHeader from './components/Header'
export default {
  name: 'App',
  components: {MbaHeader}
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
#page {
    margin: 0 auto;
    min-height: 100%;
    height: auto !important;
    height: 100%;
}
#page, #footer {
    position: relative;
}
.container-inline div, .container-inline label {
    display: inline;
}

.form-item, .form-actions {
    margin-top: 1em;
    margin-bottom: 1em;
}
form {
    margin: 0;
    padding: 0;
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
