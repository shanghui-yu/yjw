import Api from "./api";
import qs from 'qs'
import { filterCategory, sliceHomeHotModel} from "utils/base";
var APIURL = "http://localhost:3001"
class YanJiuBaoGaoApis extends Api {
  constructor() {
    super();
  }
  //获取研究报告
  /**
   * @Author: yushanghui
   * @description: modelType:2, reportType:1 表示查询的是：一张图看懂系列报告的行业分类和 reportType：2表示查询的是精品专题报告分类和列表
   * @param {Sting} reportType
   * @Date: 2020-04-28 14:14:57
   */
  getBaoGaoList (reportType) {
   let json = {
      modelType:2,
     reportType: reportType
    }
    return this.post(`${APIURL}/backend/report/queryReport`, qs.stringify(json)).then(({ data }) => {
      return data
    });
  }
  //获取研究报告列表
  getBaoGaoType (json) {
    return this.post(`${APIURL}/backend/report/queryReportWithReportType`, qs.stringify(json)).then(({ data }) => {
      return data
    });
  }
  //获取精品专题报告详情
  getBaoGaoDetail (json) {
    return this.post(`${APIURL}/backend/report/queryReportDetailWithReportType`, qs.stringify(json)).then(({ data }) => {
      let detail = data.report
      return detail;
    });
  }
  //获取热门研究报告
  getHotBaoGaoInfo () {
    return this.post(`${APIURL}/backend/report/queryAllHotReportWithSort`).then(({ data }) => {
      //进行截取
      let records = data.list.records
      return sliceHomeHotModel(records)
    });
  }
}

export default new YanJiuBaoGaoApis();
