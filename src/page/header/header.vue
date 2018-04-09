<template>
    <div class="common">
      <div class="header">
        <div class="htext">商机分享后台管理系统</div>
      </div>
      <div class="bottom">

        <div class="leftC">
          <div class="leftList"
               v-for="(item,index) in leftList" :key="index"
               :class="index==thisIndex?'listAct':''"
               @click="bar(index)"
          >
            <div class="listText">
              <p><i class="iconfont" :class="item.icon"></i></p>
              <p>{{item.text}}</p>
            </div>
            <i class="iconfont icon-msnui-triangle-right" v-if="index==thisIndex"></i>
          </div>
        </div>
        <div class="router2">
          <router-view></router-view>
        </div>
      </div>

    </div>
</template>
<script>
    export default require('./headerCtr');
</script>
<style scoped>
  .common {
    width:100%;
    height:100%;
    display: flex;
    flex-direction:column;
  }
  .header {
    width:100%;
    height:70px;
    line-height: 70px;
    font-size:18px;
    font-weight: bold;
    color: white;
    letter-spacing: 3px;
    background-color: #3a4d6c;
  }
  .bottom{
    width:100%;
    flex: 1;
    display: flex;
    flex-direction: row;
  }
  .htext {
    width:300px;
    text-align: center;
  }
  .leftC {
    width:140px;
    height:100%;
    background-color: #252d3a;
  }
  .leftList {
    width:100%;
    height:140px;
    text-align: center;
    border-bottom:1px solid #656d79;
    position:relative;
    cursor: pointer;
  }
  .listAct:after {
    content: "";
    display:inline-block;
    position:absolute;
    top:0;
    left:0;
    width:10px;
    height:100%;
    background-color: #4768f3;
  }
  .leftList .icon-msnui-triangle-right {
    position:absolute;
    right:5px;
    -webkit-transform: translateY(-50%);
    top:50%;
    font-size:25px;
    color:#4768f3;
  }
  .listText {
    position:absolute;
    -webkit-transform: translate(-50%,-50%);
    top:50%;
    left:45%;
  }
  .listText p:nth-of-type(1) i{
    font-size:40px;
    color:white;
  }
  .listText p:nth-of-type(2) {
    font-size:15px;
    color:white;
  }
  .router2 {
    flex: 1;
    width:1px;
    height:100%;
    box-sizing: border-box;
    padding:20px;
    background-color: #e7ebee;
    display: flex;
    flex-direction: row;
    position:relative;
  }
</style>
