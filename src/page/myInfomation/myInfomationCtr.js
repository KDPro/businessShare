/**
 * Created by kdkjPC on 2018/3/29.
 */
/**
 * Created by kdkjPC on 2018/3/29.
 */
export default {
  data(){
    return {
      pwd:"",
      newPwd:"",
      conPwd:"",
      phone:"",
    }
  },
  methods:{
    edit(){
      if(this.pwd == ""||this.newPwd == ""||this.conPwd == "") {
        this.$message({
          message: "密码不能为空",
          type: 'warning',
          duration: 1500
        });
        return;
      }
      if(this.newPwd != this.conPwd) {
        this.$message({
          message: "两次新密码不相同",
          type: 'warning',
          duration: 1500
        });
        return;
      }
      this.$p({
        url:"user/updatePwd",
        params:{
          pwd:this.pwd,
          newpwd:this.newPwd
        }
      }).then(res=>{
        this.$message({
          message: "修改密码成功",
          type: 'success',
          duration: 1500
        });
      });
    },
    editPhone(){
      if(this.phone == "") {
        this.$message({
          message: "电话不能为空",
          type: 'warning',
          duration: 1500
        });
        return;
      }
      this.$p({
        url:"user/modifyTel",
        params:{
          phone:this.phone
        }
      }).then(res=>{
        this.$message({
          message: "修改电话成功",
          type: 'success',
          duration: 1500
        });
      });
    },
  },
  mounted(){
    this.$g({
      url:"user/getAphone",
      params:{}
    }).then(res=>{
      this.phone = res.data;
    });
  }
}
