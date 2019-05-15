<template>
  <div>
    <TopNav/>
    <Header/>
    <router-view name="MainNav"></router-view>
    <router-view></router-view>
  </div>
</template>
<script>
import TopNav from './Public/TopNav'
import Header from './Public/Header'
export default {
  components: {
    TopNav, Header
  }
}
</script>
<style>

</style>
