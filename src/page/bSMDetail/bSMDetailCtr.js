/**
 * Created by kdkjPC on 2018/3/29.
 */
export default {
  data(){
    return {
      id:"",   //路由拼接参数
      bDetail:{},
      userList:[],
      exportList:"", //导出信息
    }
  },
  methods:{
    /**
     * 获取商机详情
     */
    getBD(){
      this.$g({
        url:"business/getBusinessById",
        params:{
          id:this.id
        }
      }).then(res=>{
        this.bDetail = JSON.parse(JSON.stringify(res.data));
        this.bDetail.isStatusName = this.transStatus(this.bDetail.isStatus);
        this.bDetail.cDate = this.$c.times(this.bDetail.cDate,"date");
        this.exportList = this.$baseU+"user/downloadSignUserList?businessId="+this.bDetail.id;
        this.$g({
          url:"user/getSignUserList",
          params:{
            businessId:this.bDetail.id
          }
        }).then(res=>{
          this.userList = JSON.parse(JSON.stringify(res.data))
        })

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
     * 审核
     */
    checked(val){
      this.$p({
        url:"business/updateBusiness",
        params:{
          id:this.id,
          isStatus:val
        }
      }).then(res=>{
        this.$message({
          message: "修改成功",
          type: 'success',
          duration: 1500
        });
        this.getBD();
      });
    },
    /**
     * 跳转去人员详情
     */
    toDetail(id){
      this.$router.push({
        path:"/personDetail?id="+id
      })

    }
  },
  mounted(){
    this.id = this.$route.query.id;
    this.getBD();
  }
}
