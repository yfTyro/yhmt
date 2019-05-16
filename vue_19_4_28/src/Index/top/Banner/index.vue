<template>
    <div class="banner">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in imgList" :key="item">
          <img :src="item"/>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>
<script>
import banner1 from '../../../static/images/indexBanner/1.jpg'
import banner2 from '../../../static/images/indexBanner/2.jpg'
import banner3 from '../../../static/images/indexBanner/3.jpg'
import banner4 from '../../../static/images/indexBanner/4.jpg'
export default {
  data () {
    return {
      imgList: [banner1, banner2, banner3, banner4]
    }
  }
}
</script>
<style lang="less">
  .banner{
    width: 778px;
    height: 100%;
    position: relative;
    left: 200px;
    display: inline-block;
    z-index: -1;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
