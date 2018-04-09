/**
 * Created by kdkjPC on 2018/3/29.
 */
export default {
  data() {
    return {
      currentPage:1, //当前页数
      total:null,
      pageSize:null,
      formInline: {
        title:'',     //查询标题
        username:'',   //查询发布人
        isStatus:''    //查询状态
      },
      tableData: [],   //列表数组
      downList:"",    //下载链接
      allDownList:"",    //下载链接
    }
  },
  methods: {
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
        path:"/bSMDetail?id="+val.id
      })
    },
    /**
     * 获取商品列表
     */
    getUserList(select){
      if(!select) {
        var select = {};
      }
      select.pageNum = this.currentPage;
      select.orderBy = "c_date desc";
      this.$p({
        url:"business/getBusinessList",
        params:select
      }).then(res=>{
        this.total = res.data.total;
        this.pageSize = res.data.pageSize;
        var arr = JSON.parse(JSON.stringify(res.data.list));
        arr.forEach((e,index)=>{
          arr[index].cDate = this.$c.times(e.cDate,"date");
          arr[index].isStatusName = this.transStatus(e.isStatus);
          arr[index].signUp = e.signUp==null?0:e.signUp;
          arr[index].attention = e.attention==null?0:e.attention;
        });
        this.tableData = JSON.parse(JSON.stringify(arr));
        this.exportList(select);
      })
    },
    /**
     * 转换状态
     */
    transStatus(val){
      switch (val) {
        case 0 :
          return "待审核";
        break;
        case 1:
          return "已通过";
        break;
        case 2:
          return "未通过";
        break;
        case 3:
          return "已完成";
          break;
      }
    },
    /**
     * 当前页数
     * @param val
     */
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getUserList();
    },
    /**
     * 导出列表
     * @param select
     */
    exportList(select){
      this.downList = this.$baseU+"business/downloadBusinessList?";
      for(var i in select) {
        this.downList += i+"="+select[i]+"&&";
      }
      this.allDownList = this.$baseU+"business/downloadBusinessList?pageSize=0";
    }
  },
  mounted(){
    this.getUserList();
  }
}

