<template>
  <div id="app">
    <site-header></site-header>
    <div class="container generator-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import 'bootstrap/scss/bootstrap-flex.scss'
  import 'nprogress/nprogress.css'
  import SiteHeader from './components/site-header/index.vue'
  export default {
    components: {
      SiteHeader
    }
  }
</script>
<style lang="scss">
  .generator-container{
    margin-top: 70px;
  }
</style>
