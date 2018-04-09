<template>
  <div class="content">
    <div class="form">
      <p class="title">修改密码</p>
      <el-form ref="form" label-width="110px">
        <el-form-item label="原密码：">
          <el-input v-model="pwd" type="password"></el-input>
        </el-form-item>
        <el-form-item label="新密码：">
          <el-input v-model="newPwd" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：">
          <el-input v-model="conPwd" type="password"></el-input>
        </el-form-item>
        <div style="text-align: center">
          <el-button type="primary" @click="edit">确认修改</el-button>
        </div>
      </el-form>
      <!--<el-form ref="form"  :model="form" label-width="100px">-->
      <!--<el-form-item label="简述：">-->
      <!--<el-input type="textarea" :rows="10" v-model="ruleForm.desc" disabled="disabled"></el-input>-->
      <!--</el-form-item>-->
      <!--</el-form>-->
    </div>
    <div class="form">
      <p class="title">修改手机号</p>
      <el-form ref="form" class="editPhone" label-width="110px">
        <el-form-item label="手机号：">
          <el-input v-model="phone" type="text"></el-input>
        </el-form-item>
        <div style="text-align: center">
          <el-button type="primary" class="editP" @click="editPhone">确认修改</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default require('./myInfomationCtr.js');
</script>
<style scoped>
  .content {
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding:20px;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: auto;
    flex-direction: row;
  }
  .title {
    font-size:16px;
    font-weight: bold;
    color: #4768f3;
    letter-spacing: 2px;
    text-align: center;
    margin-bottom:50px;
  }
  .form {
    flex: 1;
    width:600px;
    margin:30px auto;
    border-right:1px solid #eee;
  }
  .form .el-input {
    width:400px;
  }
  .form .el-textarea {
    width:400px;
  }
  .form .el-select {
    width:150px;
  }
  .editPhone {
    margin-top:114px;
  }
  .editP {
    margin-top:60px;
  }
</style>
