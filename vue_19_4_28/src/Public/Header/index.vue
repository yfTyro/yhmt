<template>
    <div class="content search-centainer">
      <img class="logo" :src="Logo">
      <Search/>
    </div>
</template>
<script>
import Logo from 'static/images/logo.png'
import Search from './search.vue'
export default {
  data () {
    return {
      Logo: Logo
    }
  },
  components: {Logo, Search}
}
</script>
<style lang="less">
  .search-centainer{
    height:130px;
    line-height: 130px;
  }
  .logo{
    vertical-align: middle;
    margin-right: 185px;
  }
</style>
