import Api from "./api";
import qs from 'qs'
import { } from "utils/base";
var APIURL = "http://localhost:3001"
class WeKeTangApis extends Api {
  constructor() {
    super();
  }
  // 雷霆微课堂首页
  getWktList () {
    return this.post(`${APIURL}/backend/miroclass/queryMiroclassWithType`).then(({ data }) => {
      return data;
    });
  }
  //微课堂列表
  getwktType (json) {
    return this.post(`${APIURL}/backend/miroclass/queryAllMiroclassList`, qs.stringify(json)).then(({ data }) => {
      return data;
    });
  }
  //微课堂详情
  getWktDetail (miroclassId) {
    return this.post(`${APIURL}/backend/miroclass/queryMiroWithOtherById`,qs.stringify({ miroclassId})).then(({ data }) => {
      //进行截取
      return data
    });
  }
}

export default new WeKeTangApis();
