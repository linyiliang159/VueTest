<template>
  <div id="app">
    <headBar ref="headBar"></headBar>
    <router-view></router-view>
    <diaLog ref="diaLog"></diaLog>
  </div>
</template>

<script>
  import HeadBar from './components/HeadBar'
  import Dialog from './components/Dialog'
  export default {
    name: 'App',
    components: {
      headBar: HeadBar,
      diaLog:Dialog
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }
</style>
