<template>
    <div class="main-nav">
      <div class="content">
        <div class="main-nav-classify">
          <div class="classify-name">
            <span></span>
            <a>全部商品菜单</a>
          </div>
          <div class="classify-list"></div>
        </div>
        <div class="main-nav-list"></div>
      </div>
    </div>
</template>
<script>
export default {}
</script>
<style lang="less">
  @import "~static/css/Global.less";
  .main-nav{
    height: 40px;
    line-height: 40px;
    background: @red_1;
    .main-nav-classify{
      width: 200px;
      .classify-name{
        width:100%;
        heigth:100%;
        &:hover{
          background: ;
      }
      }
    }
  }
</style>
