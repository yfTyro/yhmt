<template>
    <div class="content index">
      <div class="index-top">
        <Banner/>
        <Notice/>
      </div>
      <Content/>
    </div>
</template>
<script>
import Banner from './top/Banner'
import Notice from './top/Notice'
import Content from './Content'

export default {
  components: {Banner, Notice, Content}
}
</script>
<style lang="less">
@import "~static/css/Global.less";
@import "./Public/css/indexPublic";
  .index{
    width: 1200px;
     .index-top{
        hidth:305px;
      }
  }

</style>
