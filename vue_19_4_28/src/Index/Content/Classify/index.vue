<template>
    <div class="classify">
      <div class="index-title fix">
        <span class="title-name">{{title[op]}}</span>
        <div class="classify-nav fright fix">
          <div @click="tab(0)" :class= "{indexActive: tabs.tab1}" class="classify-nav-list fleft">童装童鞋</div>
          <div @click="tab(1)" :class= "{indexActive: tabs.tab2}" class="classify-nav-list fleft">营养辅食</div>
          <div @click="tab(2)" :class= "{indexActive: tabs.tab3}" class="classify-nav-list fleft">洗漱用品</div>
          <div @click="tab(3)" :class= "{indexActive: tabs.tab4}" class="classify-nav-list fleft">儿童用具</div>
        </div>
      </div>
      <Classify :opt = "opt"/>
    </div>
</template>
<script>
import Classify from './classify.vue'
export default {
  props: ['op'],
  data () {
    return {
      title: ['1F 母婴用品', '2F 化妆护理', '3F 生活家具'],
      opt: '0',
      tabs: {
        tab1: true,
        tab2: false,
        tab3: false,
        tab4: false
      }
    }
  },
  watch: {
    opt (val) {
      if (val === 0) {
        this.tabs.tab1 = true
        this.tabs.tab2 = false
        this.tabs.tab3 = false
        this.tabs.tab4 = false
      } else if (val === 1) {
        this.tabs.tab2 = true
        this.tabs.tab1 = false
        this.tabs.tab3 = false
        this.tabs.tab4 = false
      } else if (val === 2) {
        this.tabs.tab3 = true
        this.tabs.tab1 = false
        this.tabs.tab2 = false
        this.tabs.tab4 = false
      } else if (val === 3) {
        this.tabs.tab4 = true
        this.tabs.tab1 = false
        this.tabs.tab2 = false
        this.tabs.tab3 = false
      }
    }
  },
  methods: {
    tab (val) {
      this.opt = val
    }
  },
  components: {Classify}
}
</script>
<style lang="less">
@import "~static/css/Global.less";
@import "classify";
</style>
