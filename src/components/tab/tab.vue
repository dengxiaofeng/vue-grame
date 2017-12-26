<template>
   <div class="tab">
        <div  class="tab-item" >
             <span class="tab-link"  >首页</span>
        </div>
        <div  class="tab-item" >
             <span class="tab-link" >订单</span>
        </div>
        <div  class="tab-item">
             <span class="tab-link" >社区</span>
        </div>
        <div  class="tab-item">
             <span class="tab-link" >我的</span>
        </div>
   </div>
</template>
<script type="text/ecmascript-6">
   export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab
    display: flex
    position:fixed
    bottom:0
    z-index:99999
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    background:#fff
    width:100%
    .tab-item
      flex: 1
      text-align: center
      .tab-link
        padding-bottom: 5px
        color:rgb(249, 34, 70)
      &.router-link-active
        .tab-link
          color:  rgb(249, 34, 70)
          border-bottom: 2px solid $color-theme
</style>