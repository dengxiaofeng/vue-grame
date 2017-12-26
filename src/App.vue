<template>
  <div id="app">
    
     <keep-alive>
       <router-view></router-view>
     </keep-alive>
      <tab></tab>
  </div>
</template>

<script type="text/ecmascript-6">
    import Tab from 'components/tab/tab'
    export default {
        components:{
           Tab
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  
</style>