import Api from "./api";
import qs from 'qs'
import { sliceHomeHotModel, filterCategory} from "utils/base";
var APIURL = "http://localhost:3001"
class CanPinTuPuApis extends Api {
  constructor() {
    super();
  }
  //获取产品图谱
  getCanPinTuPuList(json) {
    return this.post(`${APIURL}/backend/graph/queryGraphNoGraphType`, qs.stringify(json)).then(({ data }) => {
      return data;
    });
  }
  //获取产品图谱应急推荐
  getHotTuPuList () {
    return this.post(`${APIURL}/backend/graph/queryAllHotGraphWithSort`).then(({ data }) => {
      let records= data.list.records
      return sliceHomeHotModel(records);
    });
  }
  //获取产品图谱详情
  getTuPuDetail (id) {
    return this.post(`${APIURL}/backend/graph/queryGraphById`, qs.stringify({ graphId:id})).then(({ data }) => {
      let detail = data.list
      return detail;
    });
  }
}

export default new CanPinTuPuApis();
