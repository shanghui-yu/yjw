//列表

/***
 *  @params { tabsIndex }
 *  0:推荐要闻
 *  1:国内要闻
 *  2:国际要闻
 *  3:市场分析
 *  4:方案
 *  5:财经
 *  6:政策
 *  7:技术
 *  8:访谈
 *  9:编辑视点
 *  10:产品
 *  @params { model } 1三个图 2一个图
 *  @params { type }
 *  1 国内要闻 | 推荐要闻
 *  2 国际要闻
 *  3 政策
 *  4 访谈
 *  5 市场分析
 *  6 财经
 *  7 编辑视点
 *  8 技术
 *  9 方案
 */
export interface NewsListCommon {
  sectionTitle: string; //首页空字符串 === 广告图
  model: number;
  type: number;
  adUrl: string[];
  tabsIndex: number;
}
export interface  NewsList extends NewsListCommon{
  newsResult: {
    leftResult: NewsListLeft[];
    rightResult: NewsListObj[];
  };
}
export interface NewsListLeft {
  id: string;
  newsShortTitle: string;
  imgUrl: string;
  newsIntroduction: string;
  publishTime: string;
  author: string;
}
export interface NewsListObj {
  id: string | number;
  newsShortTitle: string;
  imgUrl: string[];
  newsIntroduction: string;
}
export interface ChanpintupuListObj {
  graphId: string | number;
  graphTitle: string;
  graphPath: string;
}

