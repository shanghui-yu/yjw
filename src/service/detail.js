import Api from "./api";

class DetailApis extends Api {
  constructor() {
    super();
  }
  //获取新闻详情
  getDetailInfo(id) {
    return this.get("/lter-web/v1/news/getNewsDetail/" + id).then(
      ({ data }) => {
        let navName = this.getNavName(data.newsDetail.newsCategory);
        return {
            ...data,
            ...{navName}
        };
      }
    );
  }
  //获取导航栏名称
  getNavName(num) {
    /**
     * 根据 newsDetail.newsCategory 区分分类
     *  1 国内要闻
     *  2 国际要闻
     *  3 政策
     *  4 访谈
     *  5 市场分析
     *  6 财经
     *  7 编辑视点
     *  8 技术
     *  9 方案
     */
    let key = Number(num);
    switch (key) {
      case 1:
        return "国内要闻";
      case 2:
        return "国际要闻";
      case 3:
        return "政策";
      case 4:
        return "访谈";
      case 5:
        return "市场分析";
      case 6:
        return "财经";
      case 7:
        return "编辑视点";
      case 8:
        return "产品";
      case 9:
        return "技术";
      case 10:
        return "方案";
      default: {
        return "未知栏目";
      }
    }
  }

  //获取新闻分类
  getNewsType() {
    return this.get("/lter-web/v1/news/queryNewsTypeList").then(({ data }) => {
      if (!data.length) return [];
      return data;
    });
  }
}

export default new DetailApis();
