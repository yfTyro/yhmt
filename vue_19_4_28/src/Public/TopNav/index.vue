<template>
    <div class="top-nav">
      <div class="content fix">
        <div class="fleft">
          <a>设为首页</a><span>|</span><a>收藏本站</a>
        </div>
        <div class="fright">
          <!--<a>路人甲</a><span>|-->
        <!--</span><a>退出登录</a><span>|-->
          <router-link to="/login">
            <a>登录</a>
          </router-link>
          <span>|</span>
          <a>我的订单</a>
        </div>
      </div>
    </div>
</template>
<script>
export default {}
</script>
<style lang="less">
  @import url("nav.less");
</style>
