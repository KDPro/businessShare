/**
 * Created by kdkjPC on 2018/3/28.
 */
export default {
  data() {
    return {
      currentPage:1, //当前页数
      total:null,
      pageSize:null,
      tableData: [], //列表数组
      formInline: {
        phone:'',     //查询手机号
        company:'',   //查询公司名称
        username: '',     //查询用户名称
        role: ''      //查询角色
      }
    }
  },
  methods: {
    /**
     * 获取用户列表
     */
    getUserList(select){
      if(!select) {
        var select = {};
      }
      select.pageNum = this.currentPage;
      this.$p({
        url:"user/selectUser",
        params:select
      }).then(res=>{
        this.total = res.data.total;
        this.pageSize = res.data.pageSize;
        var arr = JSON.parse(JSON.stringify(res.data.list));
        arr.forEach((e,index)=>{
          arr[index].role = this.trans(e.role);
          arr[index].playTour = e.playTour==null?0:e.playTour;
          arr[index].finishNum = e.finishNum==null?0:e.finishNum;
          arr[index].cpDes = e.cpDes==null?'--':e.cpDes;
          arr[index].company = e.company==null?'--':e.company;
          arr[index].username = e.username==null?'--':e.username;
        });
        this.tableData = JSON.parse(JSON.stringify(arr));
      })
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
    /**
     * 查询列表
     */
    onSubmit() {
      this.getUserList(this.formInline);
    },
    /**
     * 查看列表详情
     */
    handleClick(val) {
      console.log(val);
      this.$router.push({
        path:"/personDetail?id="+val.id
      });
    },
    /**
     * 当前页数
     * @param val
     */
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getUserList();
    }
  },
  mounted(){
    this.getUserList();
  }
}
