<template>
    <div class="main-nav">
      <div class="content fix">
        <div @mouseenter="classifyToggle(true)" @mouseleave="classifyToggle(false)" class="main-nav-classify mouseenter fleft" :class="{active:!isHide}">
          <div class="classify-name">
            <span class="icon icon-classify"></span>
            <a>全部商品菜单</a>
          </div>
          <ul v-if="toggle" class="classify-lists">
            <li @mouseenter="submenuToggle(1,true)" @mouseleave="submenuToggle(false)" class="classify-list">
              <span>母婴用品</span>
              <span class="icon icon-triangle fright"></span>
            </li>
            <li @mouseenter="submenuToggle(1,true)" @mouseleave="submenuToggle(false)" class="classify-list">
              <span>美容美肤</span>
              <span class="icon icon-triangle fright"></span>
            </li>
            <li @mouseenter="submenuToggle(1,true)" @mouseleave="submenuToggle(false)" class="classify-list">
              <span>生活家具</span>
              <span class="icon icon-triangle fright"></span>
            </li>
            <li @mouseenter="submenuToggle(1,true)" @mouseleave="submenuToggle(false)" class="classify-list">
              <span>休闲食品</span>
              <span class="icon icon-triangle fright"></span>
            </li>
            <li @mouseenter="submenuToggle(1,true)" @mouseleave="submenuToggle(false)" class="classify-list">
              <span>进口食品</span>
              <span class="icon icon-triangle fright"></span>
            </li>
            <li @mouseenter="submenuToggle(1,true)" @mouseleave="submenuToggle(false)" class="classify-list">
              <span>轻奢名品</span>
              <span class="icon icon-triangle fright"></span>
            </li>
          </ul>
          <div @mouseenter="submenusb(true)" @mouseleave="submenusb(false)" v-if="submenu"  class="classify-list-submenu fix">
            <div class="submenu-content  fleft">
              <span class="submenu-title">营养铺食</span>
              <span class="hr"></span>
              <div class="commoditylink">
                <a href="#">开衫</a>| <a href="#">皮草</a>|
                <a href="#">T恤</a>| <a href="#">婚纱</a>|
                <a href="#">风衣</a>| <a href="#">毛衣</a>|
                <a href="#">卫衣穿裙</a>| <a href="#">牛仔裤</a>|
                <a href="#">连体裤</a>| <a href="#">半身裙</a>|
                <a href="#">打底裤休闲裤</a>| <a href="#">背带裤</a>
              </div>
            </div>
            <div class="submenu-content  fleft">
              <span class="submenu-title">营养铺食</span>
              <span class="hr"></span>
              <div class="commoditylink">
                <a href="#">开衫</a>| <a href="#">皮草</a>|
                <a href="#">T恤</a>| <a href="#">婚纱</a>|
                <a href="#">风衣</a>| <a href="#">毛衣</a>|
                <a href="#">卫衣穿裙</a>| <a href="#">牛仔裤</a>|
                <a href="#">连体裤</a>| <a href="#">半身裙</a>|
                <a href="#">打底裤休闲裤</a>| <a href="#">背带裤</a>
              </div>
            </div>
            <div class="submenu-content  fleft">
              <span class="submenu-title">营养铺食</span>
              <span class="hr"></span>
              <div class="commoditylink">
                <a href="#">开衫</a>| <a href="#">皮草</a>|
                <a href="#">T恤</a>| <a href="#">婚纱</a>|
                <a href="#">风衣</a>| <a href="#">毛衣</a>|
                <a href="#">卫衣穿裙</a>| <a href="#">牛仔裤</a>|
                <a href="#">连体裤</a>| <a href="#">半身裙</a>|
                <a href="#">打底裤休闲裤</a>| <a href="#">背带裤</a>
              </div>
            </div>
            <div class="submenu-content  fleft">
              <span class="submenu-title">营养铺食</span>
              <span class="hr"></span>
              <div class="commoditylink">
                <a href="#">开衫</a>| <a href="#">皮草</a>|
                <a href="#">T恤</a>| <a href="#">婚纱</a>|
                <a href="#">风衣</a>| <a href="#">毛衣</a>|
                <a href="#">卫衣穿裙</a>| <a href="#">牛仔裤</a>|
                <a href="#">连体裤</a>| <a href="#">半身裙</a>|
                <a href="#">打底裤休闲裤</a>| <a href="#">背带裤</a>
              </div>
            </div>
            <div class="submenu-content  fleft">
              <span class="submenu-title">营养铺食</span>
              <span class="hr"></span>
              <div class="commoditylink">
                <a href="#">开衫</a>| <a href="#">皮草</a>|
                <a href="#">T恤</a>| <a href="#">婚纱</a>|
                <a href="#">风衣</a>| <a href="#">毛衣</a>|
                <a href="#">卫衣穿裙</a>| <a href="#">牛仔裤</a>|
                <a href="#">连体裤</a>| <a href="#">半身裙</a>|
                <a href="#">打底裤休闲裤</a>| <a href="#">背带裤</a>
              </div>
            </div>
            <div class="submenu-content  fleft">
              <span class="submenu-title">营养铺食</span>
              <span class="hr"></span>
              <div class="commoditylink">
                <a href="#">开衫</a>| <a href="#">皮草</a>|
                <a href="#">T恤</a>| <a href="#">婚纱</a>|
                <a href="#">风衣</a>| <a href="#">毛衣</a>|
                <a href="#">卫衣穿裙</a>| <a href="#">牛仔裤</a>|
                <a href="#">连体裤</a>| <a href="#">半身裙</a>|
                <a href="#">打底裤休闲裤</a>| <a href="#">背带裤</a>
              </div>
            </div>
          </div>
        </div>
        <div class="main-nav-list mouseenter fleft">
          <a href="#">首页</a>
        </div>
        <div class="main-nav-list mouseenter fleft">
          <a href="#">积分商城</a>
        </div>
        <div class="main-nav-list mouseenter fleft">
          <a href="#">团购</a>
        </div>
        <div class="main-nav-list mouseenter fleft">
          <a href="#">秒杀</a>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      isHide: false,
      toggle: false,
      submenu: false
    }
  },
  mounted () {
    if (!this.isHide) {
      this.toggle = true
    }
  },
  methods: {
    classifyToggle (bool) {
      if (this.isHide) {
        this.toggle = bool
      }
    },
    submenuToggle (id = -1, bool) {
      this.submenu = bool
    },
    submenusb (bool) {
      this.submenu = bool
    }
  }
}
</script>
<style lang="less">
  @import "~static/css/Global.less";
  .active{
    background: @red_2;
  }
  .mouseenter:hover{
    background: @red_2;
  }
  .main-nav{
    height: 40px;
    line-height: 40px;
    min-width:1200px;
    background: @red_1;
    color:#fff;
    .main-nav-classify{
      width: 200px;
      position: relative;
      .classify-name{
        width:100%;
        heigth:100%;
        text-align: center;
      }
      .classify-lists{
        width:100%;
        position: absolute;
        .classify-list{
          height: 53px;
          line-height: 53px;
          background: @red_1;
          border: 1px solid @red_2;
          padding-left: 30px;
          &:hover{
            background: @red_2;
          }
          .fright{
            margin-top: 20px;
            margin-right:20px;
          }
        }
      }
      .classify-list-submenu{
        width:722px;
        height: 306px;
        position: absolute;
        border: 1px solid #ff7011;
        left: 200px;
        line-height: 22px;
        background: #fff;
        .submenu-content{
          width:304px;
          height: 70px;
          margin-top: 10px;
          margin-left: 30px;
          overflow: hidden;
          .submenu-title{
            color: #000;
            font-size: 14px;
          }
          .hr{
            width:230px;
            display: block;
            border: .5px solid #eaeaea;
          }
          .commoditylink{
            width:100%;
            font-size: 12px;
            color: @gray;
            a{
              color:@gray;
              &:focus{
                color: red;
              }
            }
          }
        }
      }
    }
    .main-nav-list{
      width: 200px;
      position: relative;
      text-align: center;
      a{
        color: #fff;
      }
    }
  }
</style>
