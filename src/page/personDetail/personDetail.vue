<template>
    <div class="content">
      <p class="title">用户详情</p>
      <div class="form">
        <el-form ref="form" :inline="true" label-width="110px">
          <el-form-item label="用户名称：">
            <el-input v-model="ruleForm.username" readonly="readonly"></el-input>
          </el-form-item>
          <el-form-item label="手机号：">
            <el-input v-model="ruleForm.phone" readonly="readonly"></el-input>
          </el-form-item>
          <el-form-item label="公司名称：">
            <el-input v-model="ruleForm.company" readonly="readonly"></el-input>
          </el-form-item>
          <el-form-item label="角色：">
            <el-input v-model="ruleForm.role" readonly="readonly"></el-input>
          </el-form-item>
          <el-form-item label="完结单数：">
            <el-input v-model="ruleForm.finishNum" readonly="readonly"></el-input>
          </el-form-item>
          <el-form-item label="被打赏次数：">
            <el-input v-model="ruleForm.playTour" readonly="readonly"></el-input>
          </el-form-item>
          <el-form-item label="近期登陆时间：">
            <el-input v-model="ruleForm.lastLoginTime" readonly="readonly"></el-input>
          </el-form-item>
        </el-form>
        <el-form ref="form" label-width="100px">
        <el-form-item label="简述：">
            <el-input type="textarea" :rows="10" v-model="ruleForm.cpDes" readonly="readonly"></el-input>
          </el-form-item>
          </el-form>


      </div>

    </div>
</template>
<script>
    export default require('./personDetailCtr.js');
</script>
<style scoped>
  .content {
    width:100%;
    height:100%;
    background-color: white;
    padding:20px;
    box-sizing: border-box;
    border-radius: 10px;
  }
  .title {
    font-size:16px;
    font-weight: bold;
    color: #4768f3;
    letter-spacing: 2px;
    text-align: center;
  }
  .form {
    width:800px;
    margin:50px auto;
  }
  .form .el-input {
    width:250px;
  }
  .form .el-textarea {
    width:635px;
  }
</style>
