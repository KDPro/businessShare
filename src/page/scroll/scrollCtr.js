/**
 * Created by kdkjPC on 2018/3/28.
 */
export default {
  data() {
    return {
      tableData: []  //列表数组
    }
  },
  methods: {
    /**
     * 查询列表
     */
    getScrollList(){
      this.$g({
        url:"carousel/getPic",
        params:{}
      }).then(res=>{
        var arr = res.data;
        arr.forEach((e,index)=>{
          arr[index].path = this.$baseU + e.path;
        });
        this.tableData = arr;
      })
    },
    /**
     * 禁用还是启用
     */
    onOff(val) {
      this.$g({
        url: "carousel/onoff",
        params:{
          id:val.id
        }
      }).then(res=>{
        var str;
        if(val.status == 0) {
          str="启用成功";
        }else {
          str="禁用成功";
        }
        this.$message({
          message:str,
          type: 'success',
          duration: 1500
        });
        this.getScrollList();
      });
    },
    /**
     * 查看列表详情
     */
    handleClick(val) {
      this.$router.push({
        path:"/scrollDetail?id="+val
      })
    }
  },
  mounted(){
    this.getScrollList();
  }
}
