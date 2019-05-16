<template>
    <div class="recommend-Exhibition fix">
      <div class="recommend-goods fleft">
        <div class="recommend-goods-content">
          <div class="goodsimg">
            <img :src="images[op]">
          </div>
          <div class="recommend-goods-title">
            <span>实物商品标题实物商品标题实物商品标题实物商品标题</span>
          </div>
          <span class="recommend-goods-price">￥88.88</span>
        </div>
      </div>
      <div class="recommend-goods fleft">
        <div class="recommend-goods-content">
          <div class="goodsimg">
            <img :src="images[op]">
          </div>
          <div class="recommend-goods-title">
            <span>实物商品标题实物商品标题实物商品标题实物商品标题</span>
          </div>
          <span class="recommend-goods-price">￥88.88</span>
        </div>
      </div>
      <div class="recommend-goods fleft">
        <div class="recommend-goods-content">
          <div class="goodsimg">
            <img :src="images[op]">
          </div>
          <div class="recommend-goods-title">
            <span>实物商品标题实物商品标题实物商品标题实物商品标题</span>
          </div>
          <span class="recommend-goods-price">￥88.88</span>
        </div>
      </div>
      <div class="recommend-goods fleft">
        <div class="recommend-goods-content">
          <div class="goodsimg">
            <img :src="images[op]">
          </div>
          <div class="recommend-goods-title">
            <span>实物商品标题实物商品标题实物商品标题实物商品标题</span>
          </div>
          <span class="recommend-goods-price">￥88.88</span>
        </div>
      </div>
      <div class="recommend-goods fleft">
        <div class="recommend-goods-content">
          <div class="goodsimg">
            <img :src="images[op]">
          </div>
          <div class="recommend-goods-title">
            <span>实物商品标题实物商品标题实物商品标题实物商品标题</span>
          </div>
          <span class="recommend-goods-price">￥88.88</span>
        </div>
      </div>
    </div>
</template>
<script>
import img1 from '../../../static/images/indexBanner/4.jpg'
import img2 from '../../../static/images/indexBanner/3.jpg'
import img3 from '../../../static/images/indexBanner/2.jpg'
export default {
  props: ['opt'],
  data () {
    return {
      images: [img1, img2, img3]
    }
  },
  computed: {
    op () {
      return this.opt
    }
  }
}
</script>

<style lang="less">
  @import "~static/css/Global.less";
  .recommend-Exhibition{
    width: 1200px;
    height: 280px;
    margin-top: 4px;
    .recommend-goods{
      width:240px;
      height: 100%;
      border:1px solid #ccc;
      .recommend-goods-content{
        width:200px;
        height: 250px;
        margin: auto;
        margin-top: 20px;
        line-height: 30px;
        font-size: 14px;
        font-weight: 600;
        .goodsimg{
          width:100%;
          height: 200px;
          img{
            width:100%;
            height: 100%;
          }
        }
        .recommend-goods-price{
          color: @red_1;
        }
      }
    }
  }
</style>
