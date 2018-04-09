/**
 * Created by kdkjPC on 2018/3/27.
 */

import Axios from "axios"

var baseU = "http://192.168.20.3:8080/";
var axiosConfig = Axios.create({
  baseURL:baseU,        //请求接口公用部分
  timeout:30000,         //所有请求超过30s后过期
  withCredentials:true, //跨域凭证
});

export default {"axiosConfig":axiosConfig,"baseU":baseU}
