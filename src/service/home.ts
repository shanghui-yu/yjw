import Api from "./api";
import { sliceArr, sliceHomeModel, sliceHomeHotModel} from "utils/base";
import * as List from "Interface/commonList";
import * as Swiper from "Interface/commonSwiper";
import * as HomeTypes from "Interface/homeTypes";
var APIURL ="http://localhost:3001"
// 列表页
class HomeApis extends Api {
  constructor() {
    super();
  }
  //首页轮播图列表 banner
  baseBannerSwiper(showPos: number): Promise<Swiper.Result> {
    let url = "/lter-web/v1/scrollbanner/list";
    let basedata = {
      appId: "yjw",
      clientId: 1
    };
    return this.post(url, { ...basedata, showPos });
  }
  bannerSwiper(): Promise<Array<Swiper.ImgObj[]>> {
    let res1: Promise<Swiper.Result> = this.baseBannerSwiper(1);
    let res2: Promise<Swiper.Result> = this.baseBannerSwiper(2);
    let res3: Promise<Swiper.Result> = this.baseBannerSwiper(3);
    let res4: Promise<Swiper.Result> = this.baseBannerSwiper(4);
    let res5: Promise<Swiper.Result> = this.baseBannerSwiper(5);
    return Promise.all([res1, res2, res3, res4, res5])
      .then((res: Swiper.Result[]): Swiper.ImgArr[] => {
        //只需要 records
        let result: Swiper.ImgArr[] = res.map(
          ({ data }: Swiper.Result): Swiper.ImgArr => {
            return {
              item: data.records
            };
          }
        );
        return result;
      })
      .then(
        (list: Swiper.ImgArr[]): Array<Array<Swiper.ImgObj>> => {
          //因为默认图是前端设置，所有要判断是否存在空数组
          let result: Array<Array<Swiper.ImgObj>> = list.map(
            ({ item }: Swiper.ImgArr | any): Swiper.ImgObj[] => {
              if (!item.length) {
                return [
                  {
                    picUrl: "",
                    jumpLink: "",
                    title: "暂无新闻"
                  }
                ];
              } else {
                return item;
              }
            }
          );
          return result;
        }
      );
  }
  //首页底部的轮播图
  async getFooterSwiper():Promise<Array<Swiper.ImgObj[]>> {
    return this.post("/lter-web/v1/adinfo/list", {
      showPos: 17
    }).then(({ data }:Swiper.Result) => {
      //开始截取
      let newArr = sliceArr(data.records, 3);
      return newArr;
    });
  }
  //获取首页的左侧全部列表
  getLeftInfo():Promise<List.NewsList[] | HomeTypes.LeftRightNews[]> {
    return this.get("/lter-web/v1/news/queryLeftNews").then(({ data }) => {
      if (!data.length) return [];
      //在这里对 rightResult 进行截取
      let result:List.NewsList[] = data.map((val: List.NewsList) => {
        if (!Boolean(val.sectionTitle)) {
          return val;
        } else {
          let oldArr:List.NewsListObj[] = val.newsResult.rightResult;
          if (!oldArr.length) return val;
          //开始截取，最多13条，要拆分成三个数据，length => 4 ,4 ,5
          //需要循环的次数
          let num =
            oldArr.length >= 12
              ? Math.floor(oldArr.length / 4)
              : Math.ceil(oldArr.length / 4);
          let start = 0, //开始截取的初始下标
            end = 4, //结束截取的下标
            newArr = []; //截取之后保存的数组
          for (let i = 0; i < num; i++) {
            newArr[i] = oldArr.slice(start, end);
            start += 4;
            end += 4;
            if (i === 1) end = 13;
          }
          //使用深拷贝，不然会影响到 val ，导致ts的类型判断报错
          let copyVal:HomeTypes.LeftRightNews = JSON.parse(JSON.stringify(val));
          let newRightResult :Array<Array<List.NewsListObj>> = [...newArr];
          copyVal.newsResult.rightResult = newRightResult;
          return copyVal;
        }
      });
      return result;
    });
  }

  //获取首页的右侧全部列表
  getRightInfo():Promise<Array<HomeTypes.RightNews[]>> {
    return this.get("/lter-web/v1/news/queryRightNews").then(({data}) => {
      //进行截取
      const oldArr:HomeTypes.RightNews[] = data;
      let newArr:Array<HomeTypes.RightNews[]> = sliceArr(oldArr, 3);
      return newArr;
    });
  }
  //获取首页产品图谱
  getChanpinTupuInfo() {
    return this.post(`${APIURL}/backend/graph/queryAllGraphWithSort`).then(({ data }) => {
      //进行截取
      let records = data.list.records
      return sliceHomeModel(records)
    });
  }
  //获取首页研究报告
  getBaoGaoInfo() {
    return this.post(`${APIURL}/backend/report/queryAllReportWithSort`).then(({ data }) => {
      //进行截取
      let records = data.list.records
      return sliceHomeModel(records, 'baogao')
    });
  }
  //获取首页雷霆微课堂
  getKeTangInfo() {
    return this.post(`${APIURL}/backend/miroclass/queryAllMiroclassWithSort`).then(({ data }) => {
      //进行截取
      let records = data.list.records
      return sliceHomeModel(records)
    });
  }
  //获取首页热门图谱
  getHotTupuInfo() {
    return this.post(`${APIURL}/backend/graph/queryAllHotGraphWithSort`).then(({ data }) => {
      //进行截取
      let records = data.list.records
      return sliceHomeHotModel(records)
    });
  }
  //获取首页热门研究报告
  getHotBaoGaoInfo() {
    return this.post(`${APIURL}/backend/report/queryAllHotReportWithSort`).then(({ data }) => {
      //进行截取
      let records = data.list.records
      return sliceHomeHotModel(records)
    });
  }
}

export default new HomeApis();
