/*
 * @Author: yushanghui
 * @description: 
 * @param: 
 * @Date: 2020-04-27 18:02:30
 * @LastEditTime: 2020-04-28 15:40:26
 */
import http from "service/canpintupu";

//轮播图
const canpintupuStore = {
  state: {
    canPinLists:{},
    hotLists:[],
    tupuDetail:{}
  },
  reducers: {
    changeCanPinList: (state, canPinLists) => ({
      ...state,
      ...canPinLists
    }),
    changeCanHotLists: (state, hotLists) => ({
      ...state,
      ...hotLists
    }),
    changeDetail: (state, tupuDetail) => ({
      ...state,
      ...tupuDetail
    }),
  },
  effects: {
    async getCanPinList (json) {
      let canPinLists = await http.getCanPinTuPuList(json);
      this.changeCanPinList({canPinLists});
    },
    async getHotTuPuLists () {
      let hotLists = await http.getHotTuPuList();
      this.changeCanHotLists({ hotLists });
    },
    async getDetail (id) {
      let tupuDetail = await http.getTuPuDetail(id);
      this.changeDetail({ tupuDetail });
    },
    
  }
};

export default canpintupuStore;
