<template>
  <div class="lR">
    <div class="login">
      <p>商机分享后台管理</p>
      <div class="input">
        <i class="iconfont icon-yonghu"></i>
        <input type="text" placeholder="请输入姓名" v-model="name">
      </div>
      <div class="input">
        <i class="iconfont icon-xiugaimima-copys"></i>
        <input type="password" placeholder="请输入密码" v-model="pwd">
      </div>
      <button class="loginBtn" @click="login">登录</button>
    </div>
  </div>
</template>
<script scoped>
  export default require('./loginSCtr.js');
</script>
<style>
  .lR{
    width:100%;
    height:100%;
    background: url('../../assets/img/loginBg.png');
    background-size: 100% 100%;
    position:relative;
  }
  .login {
    width:590px;
    height:470px;
    position:absolute;
    -webkit-transform: translate(-50%,-50%);
    top:50%;
    left:50%;
    background-color: rgba(0,0,0,.5);
    border-radius: 10px;
    color:white;
  }
  .login p {
    text-align: center;
    font-size:18px;
    font-weight: bold;
    letter-spacing: 4px;
    padding:45px 0;
  }
  .login .input {
    width:430px;
    height:50px;
    border-radius: 50px;
    border:1px solid white;
    margin:0 auto;
    margin-bottom:45px;
    position:relative;
  }
  .login .input i {
    position:absolute;
    font-size:30px;
    top:9px;
    left:15px;
  }
  .login .input input {
    width:100%;
    height:50px;
    line-height:50px;
    background-color: transparent;
    outline: none;
    border:none;
    color:white;
    border-radius: 50px;
    font-size:16px;
    text-indent: 70px;
    box-sizing: border-box;
    padding-right:20px;
  }
  .login .input input::-webkit-input-placeholder{
    color:white;
  }
  .login .loginBtn {
    display: block;
    width:430px;
    height:50px;
    border-radius: 50px;
    background-color: #4768f3;
    letter-spacing: 5px;
    border:none;
    outline: none;
    font-size:16px;
    color:white;
    margin:0 auto;
    cursor: pointer;
  }
  input:-webkit-autofill {
    -webkit-text-fill-color: #fff !important;
    background-color: rgba(0,0,0,.5) !important;
    transition: background-color 5000s ease-in-out 0s;
  }
</style>

