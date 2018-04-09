/**
 * Created by kdkjPC on 2018/3/28.
 */
export default {
  data() {
    return {
      id:"",  //路由拼接参数
      ruleForm: {
        username: '',
        phone: '',
        company: '',
        role: '',
        finishNum: '',
        playTour: '',
        lastLoginTime: '',
        cpDes:''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    /**
     * 查询用户详情
     */
    getUserDetail(){
      this.$g({
        url:"user/getUserById",
        params:{
          id:this.id
        }
      }).then(res=>{
        this.ruleForm = res.data;
        this.ruleForm.role = this.trans(this.ruleForm.role);
        this.ruleForm.playTour = this.ruleForm.playTour==null?0:this.ruleForm.playTour;
        this.ruleForm.finishNum = this.ruleForm.finishNum==null?0:this.ruleForm.finishNum;
        // this.ruleForm.cpDes = this.ruleForm.cpDes==null?'- -':this.ruleForm.cpDes;
        // this.ruleForm.company = this.ruleForm.company==null?'- -':this.ruleForm.company;
        this.ruleForm.username = this.ruleForm.username==null?'- -':this.ruleForm.username;
      });
    },
    /**
     * 转换角色
     */
    trans(val) {
      switch(val) {
        case "0":
          return "游客";
          break;
        case "1":
          return "普通用户";
          break;
        case "2":
          return "管理员";
          break;
        case "3":
          return "超级管理员";
          break;
      }
    },
  },
  mounted(){
    this.id = this.$route.query.id;
    this.getUserDetail();
  }
}
