<template>
    <div class="recommend fix">
      <div class="recommend-nav">
        <div @click="Recommend('0')" :class="{ornament:ornament.Recommend}" class="recommend-nav-list fleft">
          <span>推荐商品</span>
        </div>
        <div @click="Recommend('1')" :class="{ornament:ornament.Promotion}" class="recommend-nav-list fleft">
          <span>促销商品</span>
        </div>
        <div @click="Recommend('2')" :class="{ornament:ornament.New}" class="recommend-nav-list fleft">
          <span>新品推荐</span>
        </div>
        <div class="recommend-nav-list fright">
          <span class="dianji">换一批</span>
          <span></span>
        </div>
      </div>
      <Recommend :opt="opt"/>
    </div>
</template>
<script>
import Recommend from './recommend.vue'
export default {
  components: {Recommend},
  data () {
    return {
      opt: '0',
      ornament: {
        Recommend: true,
        Promotion: false,
        New: false
      }
    }
  },
  watch: {
    opt (val) {
      if (val === '0') {
        this.ornament.Recommend = true
        this.ornament.Promotion = false
        this.ornament.New = false
      } else if (val === '1') {
        this.ornament.Promotion = true
        this.ornament.Recommend = false
        this.ornament.New = false
      } else if (val === '2') {
        this.ornament.New = true
        this.ornament.Recommend = false
        this.ornament.Promotion = false
      }
    }
  },
  methods: {
    Recommend (op) {
      this.opt = op
    }
  }
}
</script>
<style lang="less">
  @import "~static/css/Global.less";
  .recommend{
    width: 100%;
    .recommend-nav{
      height: 64px;
      line-height: 64px;
      .recommend-nav-list{
        width: 240px;
        text-align: center;
        position: relative;
        cursor:pointer;
        &.ornament{
          border-bottom: 4px solid @red_1;
        }
        .dianji{
          color: red;
          font-size: 14px;
        }
      }
    }
  }
</style>
