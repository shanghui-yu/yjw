/*
 * @Author: yushanghui
 * @description: 
 * @param: 
 * @Date: 2020-04-27 18:02:30
 * @LastEditTime: 2020-04-28 17:06:44
 */
import http from "service/yanjiubaogao";

//轮播图
const yanjiubaogaoStore = {
  state: {
    BaoGaoBest:{},
    baoGaoLists:{},
    baoGaoType:{},
    baoGaoDetail:{},
    HotBaoGao:[]
  },
  reducers: {
    changeBaoGaoBest: (state, BaoGaoBest) => ({
      ...state,
      ...BaoGaoBest
    }),
    changeBaoGao: (state, baoGaoLists) => ({
      ...state,
      ...baoGaoLists
    }),
    changeBaoGaoType: (state, baoGaoType) => ({
      ...state,
      ...baoGaoType
    }),
    changeDetail: (state, baoGaoDetail) => ({
      ...state,
      ...baoGaoDetail
    }),
    changeHotBaoGao: (state, HotBaoGao) => ({
      ...state,
      ...HotBaoGao
    }),
  },
  effects: {
    // 精品模块列表
    async getBaoGaoBestLists () {
      let BaoGaoBest = await http.getBaoGaoList(2);
      this.changeBaoGaoBest({ BaoGaoBest});
    },
    // 一张图看懂报告系列列表
    async getBaoGaoLists () {
      let baoGaoLists = await http.getBaoGaoList(1);
      this.changeBaoGao({ baoGaoLists });
    },
    // 报告类型列表
    async getBaoGaoType (json) {
      let baoGaoType = await http.getBaoGaoType(json);
      this.changeBaoGaoType({ baoGaoType });
    },
    async getBaoGaoDetail (json) {
      let baoGaoDetail = await http.getBaoGaoDetail(json);
      this.changeDetail({ baoGaoDetail });
    },
    // 获取热门报告
    async getHotBaoGaoInfo (json) {
      let HotBaoGao = await http.getHotBaoGaoInfo(json);
      this.changeHotBaoGao({ HotBaoGao });
    },
  }
};

export default yanjiubaogaoStore;
