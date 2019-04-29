<template>
    <div class="search-box">
      <div class="search">
        <input class="search-input" type="text"/>
        <a class="search-btn">搜索</a>
      </div>
      <div class="search-text">
        <a>香奈儿</a>
        <span>|</span>
        <a>奶粉</a>
        <span>|</span>
        <a>UGG</a>
        <span>|</span>
        <a>家居</a>
      </div>
    </div>
</template>
<script>
export default {}
</script>
<style lang="less">
@import "~static/css/Global.less";
  .search-box{
    width:428px;
    display: inline-block;
    line-height: normal;
    vertical-align: middle;
  }
  .search{
    width:428px;
    height:42px;
    border:2px solid @red_1;
    position: relative;
  }
  .search-input{
    width:100%;
    height: 100%;
    line-height: 38px;
    padding-left: 30px;
    color: #aaa;
    font-size: 14px;
    background:url("../../static/images/search.png") no-repeat 8px center;
    &:focus{
      outline: none;
    }
  }
  .search-btn{
    width:78px;
    height: 38px;
    display: inline-block;
    background: @red_1;
    text-align: center;
    line-height: 38px;
    color: #fff;
    font-size: 16px;
    position: absolute;
    top: 0;
    right: 0;
  }
  .search-text{
    margin-top:8px;
    color: #333;
  }
</style>
