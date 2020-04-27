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
    chanpinTupuAlls: []
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
    changeHomeChanpinTupuAlls: (state: {}, chanpinTupuAlls: Array<HomeTypes.ChanPinTuPu[]>) => ({
      ...state,
      ...chanpinTupuAlls
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
      console.log(rightAlls, 23);
      (this as any).changeHomeRight({ rightAlls });
    },
    async initChanpintupu() {
      let chanpinTupuAlls = await http.getChanpinTupuInfo();
      console.log(chanpinTupuAlls);
      // (this as any).changeHomeChanpinTupuAlls({ chanpinTupuAlls });
    }
  }
};

export default homeStore;
