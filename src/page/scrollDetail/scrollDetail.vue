<template>
    <div class="content">
      <p class="title">修改轮播图</p>
      <div class="form">
        <el-form ref="form" label-width="110px">
          <el-form-item label="轮播图：">
            <template>
              <div class="el-upload el-upload--picture-card input">
                <i class="el-icon-plus"></i>
                <img :src="src" alt="">
                <input type="file" class="inputI" @change="upPic($event)">
              </div>
              <p>建议尺寸 宽:320px 高:150px</p>
            </template>
          </el-form-item>
          <!--<el-form-item label="跳转链接：">-->
            <!--<el-input v-model="link">-->
              <!--<template slot="prepend">Http://</template>-->
            <!--</el-input>-->
          <!--</el-form-item>-->
          <el-form-item label="内容：">
            <el-input type="textarea" :rows="5" v-model="content"></el-input>
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
    </div>
</template>
<script>
    export default require('./scrollDetailCtr.js');
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
  }
  .title {
    font-size:16px;
    font-weight: bold;
    color: #4768f3;
    letter-spacing: 2px;
    text-align: center;
  }
  .form {
    width:600px;
    margin:30px auto;
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
  .input {
    position:relative;
  }
  .input img {
    height:100%;
    position:absolute;
    top:0;
    left:0;
    z-index:1;
  }
  .inputI {
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    opacity: 0;
    z-index:10;
  }
  .el-upload--picture-card{
    width:320px;
    height:150px;
  }
</style>
