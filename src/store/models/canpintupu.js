/*
 * @Author: yushanghui
 * @description: 
 * @param: 
 * @Date: 2020-04-27 18:02:30
 * @LastEditTime: 2020-04-27 18:37:23
 */
import http from "service/canpintupu";

//轮播图
const canPinTuPuStore = {
  state: {
    CanPinLists:{}
  },
  reducers: {
    changeCanPinList: (state, CanPinLists) => ({
      ...CanPinLists
    }),
  },
  effects: {
    async getCanPinList (json) {
      let res = await http.getCanPinTuPuList(json);
      console.log(res);
      
      this.changeCanPinList(res);
    },
  }
};

export default canPinTuPuStore;
