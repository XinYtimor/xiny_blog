<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="less">
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  border-radius: 0;
  background: 0 0;
}
::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background: rgba(216, 216, 216, 0.8);
}

body,
html {
  font-size: 0.520833333vw !important;
  width: 100%;
  height: 100%;
  background-color: #efefef;
  /* filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale");
  filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
  -webkit-filter: grayscale(1); */
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
fieldset,
lengend,
button,
input,
textarea,
th,
td {
  margin: 0;
  padding: 0;
}

body,
button,
input,
select,
textarea {
  font: 12px/1 Tahoma, Helvetica, Arial, '\5b8b\4f53', sans-serif;
}

h1 {
  font-size: 18px;
}
h2 {
  font-size: 16px;
}
h3 {
  font-size: 14px;
}
h4,
h5,
h6 {
  font-size: 100%;
}

address,
cite,
dfn,
em,
var {
  font-style: normal;
}

code,
kbd,
pre,
samp,
tt {
  font-family: 'Courier New', Courier, monospace;
}

small {
  font-size: 12px;
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

abbr[title],
acronym[title] {
  border-bottom: 1px dotted;
  cursor: help;
}

q:before,
q:after {
  content: '';
}

.clearfix:after {
  content: '020';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.clearfix {
  zoom: 1;
}
</style>
