/*
 * @Author: yushanghui
 * @description: 
 * @param: 
 * @Date: 2020-04-27 18:02:30
 * @LastEditTime: 2020-04-28 17:23:01
 */
import http from "service/weketang";

//轮播图
const weketangStore = {
  state: {
    wktLists:{},
    wktType:{},
    wktDetail: {}
  },
  reducers: {
    changeWktLists: (state, wktLists) => ({
      ...state,
      ...wktLists
    }),
    changeWktType: (state, wktType) => ({
      ...state,
      ...wktType
    }),
    changeWktDetail: (state, wktDetail) => ({
      ...state,
      ...wktDetail
    })
  },
  effects: {
    // 精品模块列表
    async getwktLists () {
      let wktLists = await http.getWktList();
      this.changeWktLists({ wktLists});
    },
    // 一张图看懂报告系列列表
    async getwktType () {
      let wktType = await http.getwktType();
      this.changeWktType({ wktType });
    },
    // 报告类型列表
    async getwktDetail (id) {
      let wktDetail = await http.getWktDetail(id);
      this.changeWktDetail({ wktDetail });
    },
  }
};

export default weketangStore;
