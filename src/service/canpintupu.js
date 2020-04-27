import Api from "./api";
var APIURL = "http://localhost:3001"
class CanPinTuPuApis extends Api {
  constructor() {
    super();
  }
  //获取产品图谱分类
  getCanPinTuPuList(json) {
    return this.post(`${APIURL}/backend/graph/queryGraphNoGraphType`,json).then(({ res }) => {
      return res;
    });
  }
}

export default new CanPinTuPuApis();
