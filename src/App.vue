<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html,body{
    width:100%;
    height:100%;
    padding:0;
    margin:0;
    min-width:1349px;
  }
  * {
    padding:0;
    margin:0;
  }
  #app {
    width:100%;
    height:100%;
    font-size:14px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color:white;
  }
  .clear:after {
    content:"";
    display: block;
    clear: both;
  }
  .el-icon-loading {
    font-size:50px;
  }
  .el-loading-spinner .el-loading-text {
    font-size:20px;
  }
  .el-table .cell {
    white-space: nowrap;
  }
</style>
