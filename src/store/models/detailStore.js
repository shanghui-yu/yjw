import http from "service/detail";

//轮播图
const detailStore = {
  state: {
    newsDetail: {}, // 新闻详情
    recommendList: [],  //相关推荐
    newestRecommendNews: [], // 最新发布列表
    adUrl: [] , //广告轮播图
    navName:'', //面包屑的导航栏分类名称
  },
  reducers: {
    changeAll: (state, newState) => ({
      ...newState
    }),
  },
  effects: {
    async getDetailData(id) {
      let res = await http.getDetailInfo(id);
      this.changeAll(res);
    },
  }
};

export default detailStore;
