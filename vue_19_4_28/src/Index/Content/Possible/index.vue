<template>
    <div class="possible">
      <div class="index-title">
        <span class="title-name">
          猜你喜欢
        </span>
        <span class="title-name-1">根据你的浏览记录推荐的商品</span>
      </div>
      <div class="possible-content fix">
        <div class="possible-goods-box fleft"></div>
        <div class="possible-goods-box fleft"></div>
        <div class="possible-goods-box fleft"></div>
        <div class="possible-goods-box fleft"></div>
        <div class="possible-goods-box fleft"></div>
      </div>
    </div>
</template>
<script>
export default {}
</script>
<style lang="less">
  @import "~static/css/Global.less";
  .possible{
    margin-top: 10px;
    .possible-content{
      height: 372px;
      border-top: 2px solid @red_1;
      padding: 16px;
      .possible-goods-box{
        width: 232px;
        height:340px;
        border: 1px solid #f1f1f1;
      }
    }
  }
</style>
