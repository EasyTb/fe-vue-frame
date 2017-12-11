<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
    name: 'APP'
  }
</script>

<style lang="scss">
  @import 'normalize.css/normalize.css';
  *:focus{
    outline : none;
  }

@import './styles/index.scss'; // 全局自定义的css样式
</style>
