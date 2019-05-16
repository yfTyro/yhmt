<template>
    <div class="notice fright">
      <div class="notice-title fix">
        <span>文章资讯</span><span class="gengduo fright">更多></span>
      </div>
      <ul class="notice-content">
        <li class="notice-transverse">
          <span>【公告】</span><a href="#">此处文章标题，如有超出三点显示</a>
        </li>
        <li class="notice-transverse">
          <span>【公告】</span><a href="#">此处文章标题，如有超出三点显示</a>
        </li>
        <li class="notice-transverse">
          <span>【公告】</span><a href="#">此处文章标题，如有超出三点显示</a>
        </li>
        <li class="notice-transverse">
          <span>【公告】</span><a href="#">此处文章标题，如有超出三点显示</a>
        </li>
        <li class="notice-transverse">
          <span>【公告】</span><a href="#">此处文章标题，如有超出三点显示</a>
        </li>
        <li class="notice-transverse">
          <span>【公告】</span><a href="#">此处文章标题，如有超出三点显示</a>
        </li>
      </ul>
    </div>
</template>
<script>
export default {}
</script>
<style lang="less">
  @import "~static/css/Global.less";
  .notice{
    width: 220px;
    border: 1px solid #e2e2e2;
    .notice-title{
      height: 40px;
      line-height: 40px;
      border: 1px solid #e2e2e2;
      background: #fff9f5;
      .gengduo{
        color: #ff2d52;
      }
    }
    .notice-content{
      width: 100%;
      .notice-transverse{
        height: 42px;
        line-height: 42px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        a{
          color:@gray;
        }
      }
    }
  }
</style>
