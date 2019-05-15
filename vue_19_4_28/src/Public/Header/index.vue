<template>
    <div class="content search-centainer">
      <router-link to="/">
        <img class="logo" :src="Logo">
      </router-link>
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

  @media (max-width: 992px) {
    .search-centainer{
      text-align: center;
    }
    .logo{
      display: none;
    }
  }
</style>
