import React from "react";
import Banner from "./Banner"; //轮播图
import NewsLeftModules from "./NewsLeftModules"; //首页左侧全部列表
import NewsRightModules from "./NewsRightModules"; //首页右侧全部列表

import SectionLayoutA from "components/SectionLayoutA"; //首页左侧全部列表
import SectionLayoutB from "components/SectionLayoutB"; //首页右侧全部列表
import NewListTwo from 'components/newListTwo'
import SideFigureNews from 'components/home/SideFigureNews'


import LazyImg from "components/LazyImg";
import { Carousel, Icon } from "antd";
import MyBackTop from "components/MyBackTop";
import { Connect } from 'hoc/Connect';
import { settings, urlReg } from "utils/base";
import * as List from "Interface/commonList";
import * as HomeTypes from "Interface/homeTypes";
import * as Swiper from "Interface/commonSwiper";
import "sass/home/home.scss";
import "sass/home/module-side.scss";

interface PropsTypes {
  initLeft: Function;
  initRight: Function;
  initFooterAlls: Function;
  initChanpintupu: Function;
  leftAlls: HomeTypes.LeftRightNews[];
  rightAlls: Array<HomeTypes.RightNews[]>;
  footerAlls: Array<Swiper.ImgObj[]>;
  chanpinTupuAlls: Array<HomeTypes.ChanPinTuPu[]>;
}

interface State {
  popUpFlag: Boolean
}

class Home extends React.Component<PropsTypes, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      popUpFlag: true // 控制弹窗消失隐藏
    }
  }

  componentDidMount() {
    // this.props.initLeft();
    this.props.initRight();
    // this.props.initFooterAlls();
    this.props.initChanpintupu()
  }

  // 首页弹窗广告
  renderPopUpAd = () => {
    return (
      <div className="popUpWrap fadeInDownBig">
        <div className="mask"></div>
        <div className="popUp fadeInDownBig">
          <Icon type="close" className="delete" onClick={() => { this.setState({ popUpFlag: false }) }} />
          <img src={require('imgs/popUp.jpg')} />
        </div>
      </div>
    )
  }

  render() {
    const { leftAlls, rightAlls, footerAlls } = this.props;
    return (
      <div>
        <div className="home-box wrapper">
          <Banner />
          <div className="module">
            <div className="header" data-title="NEWS">
              <h2>新闻</h2>
            </div>
          </div>
          <div className="content-box">
            {/* 新闻模块左侧大模块 */}
            <div className="left-box">
              {!!leftAlls.length &&
                leftAlls.map((val: HomeTypes.LeftRightNews, index: number) => {
                  return (
                    <NewsLeftModules
                      key={`${val.sectionTitle}_${index}`}
                      items={val}
                    />
                  );
                })}
            </div>
            {/* 新闻模块右侧大模块 */}
            <div className="right-box">
              {!!rightAlls.length &&
                rightAlls.map((val, index) => {
                  return (
                    <div
                      className="right-content-wrap"
                      key={`adfaf_${index}`}
                    >
                      {val.map((key, inx) => {
                        return (
                          <NewsRightModules items={key} key={`qweq_${inx}`} />
                        );
                      })}
                    </div>
                  );
                })}
            </div>
          </div>
          {/* 底部广告轮播 */}
          <React.Fragment>{this.footerAdSwiper(footerAlls)}</React.Fragment>
          <div className="module">
            <div className="header" data-title="Global Unification">
              <h2>行业智库</h2>
            </div>
            <div className="clearfix">
              <div className="module-section">
                <div className="model">
                  <div className="header">
                    <a href="/" className="view-more">多</a>
                    <h3>产品谱图</h3>
                  </div>
                  <SectionLayoutA />
                </div>
                <div className="model">
                  <div className="header">
                    <a href="/" className="view-more">多</a>
                    <h3>研究报告</h3>
                  </div>
                  <SectionLayoutB />
                </div>
                <div className="model">
                  <div className="header">
                    <a href="/" className="view-more">多</a>
                    <h3>雷霆微课堂</h3>
                  </div>
                  <SectionLayoutA />
                </div>
              </div>

              <div className="module-side">
                <div className="ad-box">
                  <div id="">
                    <a href="/">
                      <img src="https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200304-%E5%90%88%E6%88%90%E5%88%87%E6%8D%A2%E5%9B%BE333-rc-upload-1582854164061-170.gif" alt="" width="300" height="250" />
                    </a>
                  </div>
                </div>
                <div className="model">
                  <div className="header">
                    <a href="/" className="view-more">多</a>
                    <h3>热门图谱</h3>
                  </div>
                  <SideFigureNews />
                  <NewListTwo />
                </div>
                <div className="ad-box">
                  <a href="/">
                    <img src="https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200304-%E5%90%88%E6%88%90%E5%88%87%E6%8D%A2%E5%9B%BE333-rc-upload-1582854164061-170.gif" alt="" width="300" height="250" />
                  </a>
                </div>
                <div className="model">
                  <div className="header">
                    <a href="/" className="view-more">多</a>
                    <h3>热门研报</h3>
                  </div>
                  <SideFigureNews />
                  <NewListTwo />
                </div>
              </div>

            </div>
          </div>
          {/* 返回顶部 */}
          <MyBackTop />
          {this.state.popUpFlag && <this.renderPopUpAd />}
        </div>
      </div>
    );
  }

  footerAdSwiper = (arr: any) => {
    let setObj = {
      //这个有指示器
      ...settings,
      dots: true
    };
    if (!arr.length) return;
    return (
      <div className="home-footer-swiper">
        <div
          className="left-arrow"
          onClick={() => (this as any).refs.footerSwiper.prev()}
        ></div>
        <div
          className="right-arrow"
          onClick={() => (this as any).refs.footerSwiper.next()}
        ></div>
        <Carousel {...setObj} ref="footerSwiper">
          {arr.map((val: any, index: any) => {
            return (
              <div className="footer-ad-swiper" key={`hjakq_${index}`}>
                {val.map((key: any, inx: any) => {
                  return (
                    <a
                      target="_blank"
                      href={urlReg(key.jumpLink)}
                      onClick={event => {
                        if (!Boolean(key.jumpLink)) event.preventDefault();
                      }}
                      key={`link_${inx}`}
                    >
                      <LazyImg imgUrl={key.picUrl} />
                    </a>
                  );
                })}
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  };
}

export default Connect({
  name: 'homeStore',
  need: [],
  func: ['initLeft', 'initRight', 'initFooterAlls','initChanpintupu'],
}, Home);
