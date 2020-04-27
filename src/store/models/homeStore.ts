import http from "service/home";
import * as Swiper from "Interface/commonSwiper";
import * as HomeTypes from "Interface/homeTypes";
import * as List from "Interface/commonList";

const homeStore = {
  state: {
    homeBanner: [], //首页顶部轮播图
    footerAlls: [], //底部轮播图
    leftAlls: [], //左侧大模块
    rightAlls: [], //右侧大模块
    chanpinTupuAlls: {  // 首页产品图谱
      firstModel:[],
      twoModel: [],
      threeModel:[]
    },
    YJBGAlls: {  // 首页研究报告
      firstModel: [],
      twoModel: [],
      threeModel: []
    },
    LTWKTAlls: {  // 首页雷霆微课堂
      firstModel: [],
      twoModel: [],
      threeModel: []
    },
    HotBao:[],
    HotTupu:[]
  },

  reducers: {
    changeHomeBanner: (state: {}, homeBanner: Array<Swiper.ImgObj[]>) => ({
      ...state,
      ...homeBanner
    }),
    changeHomeFooterAlls: (state: {}, footerAlls: Array<Swiper.ImgObj[]>) => ({
      ...state,
      ...footerAlls
    }),
    changeHomeLeft: (
      state: {},
      leftAlls: List.NewsList[] | HomeTypes.LeftRightNews[]
    ) => ({
      ...state,
      ...leftAlls
    }),
    changeHomeRight: (state: {}, rightAlls: Array<HomeTypes.RightNews[]>) => ({
      ...state,
      ...rightAlls
    }),
    changeHomeChanpinTupu: (state: {}, chanpinTupuAlls: Array<HomeTypes.HomeZhiKu[]>) => ({
      ...state,
      ...chanpinTupuAlls
    }),
    changeHomeBaoGao: (state: {}, YJBGAlls: Array<HomeTypes.HomeZhiKu[]>) => ({
      ...state,
      ...YJBGAlls
    }),
    changeHomeKeTang: (state: {}, LTWKTAlls: Array<HomeTypes.HomeZhiKu[]>) => ({
      ...state,
      ...LTWKTAlls
    }),
    changeHotBaoGao: (state: {}, HotBao: Array<HomeTypes.HomeHot[]>) => ({
      ...state,
      ...HotBao
    }),
    changeHotTupu: (state: {}, HotTupu: Array<HomeTypes.HomeHot[]>) => ({
      ...state,
      ...HotTupu
    }),
  },

  effects: {
    async initHomeBanner() {
      let homeBanner = await http.bannerSwiper();
      (this as any).changeHomeBanner({ homeBanner });
    },
    async initFooterAlls() {
      let footerAlls = await http.getFooterSwiper();
      (this as any).changeHomeFooterAlls({ footerAlls });
    },
    async initLeft() {
      let leftAlls = await http.getLeftInfo();
      (this as any).changeHomeLeft({ leftAlls });
    },
    async initRight() {
      let rightAlls = await http.getRightInfo();
      (this as any).changeHomeRight({ rightAlls });
    },
    async initChanpintupu() {
      let chanpinTupuAlls = await http.getChanpinTupuInfo();
      (this as any).changeHomeChanpinTupu({ chanpinTupuAlls });
    },
    async initKeTang() {
      let LTWKTAlls = await http.getKeTangInfo();
      (this as any).changeHomeBaoGao({ LTWKTAlls });
    },
    async initBaoGao() {
      let YJBGAlls = await http.getBaoGaoInfo();
      (this as any).changeHomeKeTang({ YJBGAlls });
    },
    async initHotBaoGao() {
      let HotBao = await http.getHotBaoGaoInfo();
      (this as any).changeHomeKeTang({ HotBao });
    },
    async initHotTupu() {
      let HotTupu = await http.getHotTupuInfo();
      (this as any).changeHomeKeTang({ HotTupu });
    }
  }
};

export default homeStore;
