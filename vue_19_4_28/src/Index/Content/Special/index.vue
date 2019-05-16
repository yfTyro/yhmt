<template>
    <div class="special">
      <div class="index-title">
        <span class="title-name">特价秒杀</span>
        <span>本场还剩</span>
          <span class="limitedtime">0</span>
          <span class="limitedtime">1</span>
          :
          <span class="limitedtime">2</span>
          <span class="limitedtime">3</span>
          :
          <span class="limitedtime">4</span>
          <span class="limitedtime">5</span>
        </div>
      <div class="special-box fix">
        <div class="special-lists fix">
          <div class="special-goods fleft">
            <div class="special-goods-box fix">
              <div class="special-goods-img fleft">
                <img src="../../../static/images/indexBanner/3.jpg"/>
              </div>
              <div class="special-goods-content fleft">
                <div class="beyond">
                  <a class="special-goods-describe" href="#">商品实物标题商品实物标题商品实物标题商品实物标题 商品实物标题</a>
                </div>
                <span class="special-goods-discount box">￥123.44</span>
                <span class="special-goods-price box">￥1999.00</span>
                <div class="special-goods-btn box">立即购买</div>
              </div>
            </div>
          </div>
          <div class="special-goods fleft">
            <div class="special-goods-box fix">
              <div class="special-goods-img fleft">
                <img src="../../../static/images/indexBanner/3.jpg"/>
              </div>
              <div class="special-goods-content fleft">
                <div class="beyond">
                  <a class="special-goods-describe" href="#">商品实物标题商品实物标题商品实物标题商品实物标题 商品实物标题</a>
                </div>
                <span class="special-goods-discount box">￥123.44</span>
                <span class="special-goods-price box">￥1999.00</span>
                <div class="special-goods-btn box">立即购买</div>
              </div>
            </div>
          </div>
          <div class="special-goods fleft">
            <div class="special-goods-box fix">
              <div class="special-goods-img fleft">
                <img src="../../../static/images/indexBanner/3.jpg"/>
              </div>
              <div class="special-goods-content fleft">
                <div class="beyond">
                  <a class="special-goods-describe" href="#">商品实物标题商品实物标题商品实物标题商品实物标题 商品实物标题</a>
                </div>
                <span class="special-goods-discount box">￥123.44</span>
                <span class="special-goods-price box">￥1999.00</span>
                <div class="special-goods-btn box">立即购买</div>
              </div>
            </div>
          </div>
          <div class="special-goods fleft">
            <div class="special-goods-box fix">
              <div class="special-goods-img fleft">
                <img src="../../../static/images/indexBanner/3.jpg"/>
              </div>
              <div class="special-goods-content fleft">
                <div class="beyond">
                  <a class="special-goods-describe" href="#">商品实物标题商品实物标题商品实物标题商品实物标题 商品实物标题</a>
                </div>
                <span class="special-goods-discount box">￥123.44</span>
                <span class="special-goods-price box">￥1999.00</span>
                <div class="special-goods-btn box">立即购买</div>
              </div>
            </div>
          </div>
          <div class="special-goods fleft">
            <div class="special-goods-box fix">
              <div class="special-goods-img fleft">
                <img src="../../../static/images/indexBanner/3.jpg"/>
              </div>
              <div class="special-goods-content fleft">
                <div class="beyond">
                  <a class="special-goods-describe" href="#">商品实物标题商品实物标题商品实物标题商品实物标题 商品实物标题</a>
                </div>
                <span class="special-goods-discount box">￥123.44</span>
                <span class="special-goods-price box">￥1999.00</span>
                <div class="special-goods-btn box">立即购买</div>
              </div>
            </div>
          </div>
          <div class="special-goods fleft">
            <div class="special-goods-box fix">
              <div class="special-goods-img fleft">
                <img src="../../../static/images/indexBanner/3.jpg"/>
              </div>
              <div class="special-goods-content fleft">
                <div class="beyond">
                  <a class="special-goods-describe" href="#">商品实物标题商品实物标题商品实物标题商品实物标题 商品实物标题</a>
                </div>
                <span class="special-goods-discount box">￥123.44</span>
                <span class="special-goods-price box">￥1999.00</span>
                <div class="special-goods-btn box">立即购买</div>
              </div>
            </div>
          </div>
        </div>
        <div class="special-more fright">
          <img src="../../../static/images/indexBanner/3.jpg"/>
        </div>
      </div>
    </div>
</template>
<script>
export default {}
</script>
<style lang="less">
@import "~static/css/Global.less";
  .box{
    display: inline-block;
    margin-top: 15px;
  }
  .special{
    margin-top: 10px;
      .limitedtime{
        width: 22px;
        height: 22px;
        display: inline-block;
        line-height: 22px;
        text-align: center;
        border-radius: 50%;
        background: #666;
        color: #fff;
      }
    .special-box{
      min-width: 1200px;
      height: 325px;
      border-top:2px solid @red_1;
      .special-lists{
        height: 100%;
        width:950px;
        display: inline-block;
        .special-goods{
          width: 316.5px;
          height: 161.5px;
          border:1px solid #ccc;
          .special-goods-box{
            width:265px;
            height: 110px;
            margin: auto;
            margin-top: 25px;
            .special-goods-img{
              width: 105px;
              height: 100%;
              img{
                width:100%;
                height:100%;
              }
            }
            .special-goods-content{
              width: 145px;
              height: 100%;
              margin-left: 15px;
              .special-goods-describe{
                color: #333;
                font-size: 12px;
              }

              .special-goods-btn{
                display: inline-block;
                background: @red_1;
                padding: 5px;
                color: #fff;
                cursor: pointer;
                border-radius: 2px;
              }
            }
          }
        }
      }
      .special-more{
        width: 250px;
        height: 100%;
        img{
          width:100%;
          height: 100%;
        }
      }
    }
  }
</style>
