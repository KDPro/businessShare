<template>
    <div class="content">
      <el-row>
        <a :href="exportList" class="el-button el-button--primary">导出报名人信息</a>
        <!--<a href="http://www.baidu.com" class="el-button el-button&#45;&#45;primary">导出该详情</a>-->
        <el-button type="success" :disabled="bDetail.isStatus == 0?false:true" @click="checked(1)">通过</el-button>
        <el-button type="danger" :disabled="bDetail.isStatus == 0?false:true" @click="checked(2)">拒绝</el-button>
        <el-button type="info"  :disabled="bDetail.isStatus == 1?false:true" @click="checked(3)">完结</el-button>
      </el-row>
      <div class="detail">
        <h2>标题 :<span>{{bDetail.title}} </span> &emsp;<el-button :type="(bDetail.isStatus == 0)?'primary':(bDetail.isStatus == 1)?'success':(bDetail.isStatus == 2)?'danger':'info'" plain disabled="disabled" size="small">{{bDetail.isStatusName}}</el-button></h2>
        <p><span>报名数：<span>{{bDetail.signUp==null?0:bDetail.signUp}}</span></span><span>关注数：<span>{{bDetail.attention==null?0:bDetail.attention}}</span></span><span>分享次数：<span>{{bDetail.share==null?0:bDetail.share}}</span></span></p>
        <p><span>发布者：<span>{{bDetail.username}}</span></span><span>发布时间：<span>{{bDetail.cDate}}</span></span></p>
        <el-form>
          <el-form-item label="简述：">
            <el-input type="textarea" :rows="10"  readonly="readonly" :value="bDetail.des"></el-input>
          </el-form-item>
        </el-form>
        <div class="person">
          报名人：
          <div>
            <div class="user" v-for="item,index in userList" :key="index" @click="toDetail(item.id)">
              <div><img :src="item.url" alt=""></div>
              <div><span>{{item.username}}</span></div>
            </div>
          </div>

        </div>
      </div>

    </div>
</template>
<script>
    export default require('./bSMDetailCtr.js');
</script>
<style>
  .content {
    width:100%;
    height:100%;
    background-color: white;
    padding:50px;
    box-sizing: border-box;
    border-radius: 10px;
  }
  .detail {
    margin-top:50px;
    font-size:16px;
    color:#666;
  }
  .detail h2 {
    font-size:18px;
    margin-bottom:20px;
  }
  .detail p {
    font-size:15px;
    margin-bottom:20px;
  }
  .detail p>span {
    margin-right:40px;
  }
  .detail p span span {
    color:#409EFF;
    font-size:15px;
  }
  .el-textarea__inner {
    width:800px;
  }
  .person {
    font-size:15px;
  }
  .person>div {
    width: 800px;
    margin-top:10px;
  }
  .person span{
    line-height: 30px;
    color: #409eff;
    cursor: pointer;
    font-size:12px;
    text-align: center;
  }
  .user {
    float:left;
    margin-right:20px;
    margin-bottom:10px;
  }
  .user div {
    text-align: center;
  }
  .user div img {
    width:50px;
    height:50px;
    border-radius:50px;
  }
</style>
