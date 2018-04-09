/**
 * Created by kdkjPC on 2018/3/15.
 */
export default {
  data(){
    return {
      thisIndex: 0,
      leftList: [{
        text: "人员管理",
        icon: "icon-guanliyuan-copy"
      }, {
        text: "商机管理",
        icon: "icon-wenjianliebiao-copy"
      }, {
        text: "轮播图管理",
        icon: "icon-lishihangcheng-copy"
      },
        {
          text: "个人信息",
          icon: "icon-guanliyuan-copy"
        }]
    }
  },
  methods: {
    bar(index){
      this.thisIndex = index;
      switch (index) {
        case 0:
          this.$router.push({
            path: "/person"
          });
          break;
        case 1:
          this.$router.push({
            path: "/bSM"
          });
          break;
        case 2:
          this.$router.push({
            path: "/scroll"
          });
          break;
        case 3:
          this.$router.push({
            path: "/myInfomation"
          });
          break;
      }

    }
  },
  mounted(){
    if (this.$route.path == "/bSM" || this.$route.path == '/bSMDetail') {
      this.thisIndex = 1;
    } else if (this.$route.path == "/scroll" || this.$route.path == "/scrollDetail") {
      this.thisIndex = 2;
    } else if (this.$route.path == "/myInfomation") {
      this.thisIndex = 3;
    }else {
      this.thisIndex = 0;
    };
  }
}
