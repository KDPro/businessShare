/**
 * Created by kdkjPC on 2018/3/28.
 */
/**
 * Created by kdkjPC on 2018/1/23.
 */
export default {
  data(){
    return {
      name:'',
      pwd:''
    }
  },
  methods:{
    login(){
      if(this.name==""||this.pwd=="") {
        this.$message({
          message: '请输入用户名或密码',
          type: 'warning',
          duration:1500
        });
        return false;
      }
      this.$p({
        url:"login",
        params:{
          username:this.name,
          password:this.pwd
        }
      }).then((res)=>{
        this.$router.push({
          name:"header"
        });
      },(errRes)=>{

      });
    }
  },
  created(){

  }
}
