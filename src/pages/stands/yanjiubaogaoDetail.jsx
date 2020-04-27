import React, { Component } from "react";
import "sass/yanjiubaogao.scss";
import "sass/tupu.scss";
import DownloadAlert from "components/stands/DownloadAlert";
import Crumbs from "components/stands/Crumbs";
import TupuFigureNewsList from "components/stands/TupuFigureNewsList";
export default class YanJiuBaoGaoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MaskStatus: false,
      crumbsData: [
        {
          path: "/weiketang",
          value: "研究报告"
        },
        {
          path: "/",
          value: "一张图看懂系列报告列表"
        }
      ],
      tupuList: [
        {
          link: '/stands/chanpintupuDetail',
          img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
          content: '旧恨又添新仇！日韩贸易对抗或重新定义',
          tabs: '防护用品',
          total: '100'
        },
        {
          link: '/stands/chanpintupuDetail',
          img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
          content: '旧恨又添新仇！日韩贸易对抗或重新定义',
          tabs: '防护用品',
          total: '100'
        },
      ],
    };
  }
  componentDidMount () {
    window.scrollTo(0, 0);
  }

  componentWillUnmount () {
  }

  showMask = (e) => {
    this.setState({ MaskStatus: !this.state.MaskStatus });
  }

  render () {
    let { crumbsData, tupuList} = this.state
    return (
      <div className="wrapper">
        <Crumbs crumbsData={crumbsData}></Crumbs>
        

        <div className="clearfix">
          <div className="module-section">
            <div className="tupu-figure-intro">
              <div className="figure">
                <img src="https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png" alt="" />
              </div>
              <h3>大城小爱：抗击疫情中一个武汉基层民警的独白,抗击疫情中一个武汉 基层民警的独白,抗击疫情中一个武汉基层民警的独白......</h3>
              <div className="about-info">
                <span>所属行业：防护用品</span>
                <span>时间：2020/1/1</span>
                <span>类型：完整版</span>
                <span>下载量：100</span>
              </div>
              <div className="tools">
                <span className="button" onClick={this.showMask}>下载</span>
              </div>
            </div>
            {/* 详情 */}
            <div className="detail">
              <div className="tabs">
                <span className="current">产品介绍</span>
              </div>
              <div className="contents">
                <div>
                  <p>上游新闻记者（爆料微信号：shangyounews）获悉，该视频是8月6日上午乐山市委书记彭琳在当地一桥梁上指导抗洪救灾工作时，对乐山市水务局局长金玉梅提出要求，“河道上的违章建筑一个星期之内给我拆完，拆不完我撤你”。</p>
                </div>
              </div>
            </div>
          </div>
          <div className="module-side">
            <div className="model">
              <div className="header">
                <h3>热门一张图研报</h3>
              </div>
              <ul className="tupu-figure-news-list">
                {
                  !!tupuList.length && tupuList.map((item, index) => {
                    return (
                      <TupuFigureNewsList ItemInfo={item} key={`id_${index}`} />
                    )
                  })
                }
              </ul>
            </div>
            <div className="ad-box">
              <a href="/">
                <img src="https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200304-%E5%90%88%E6%88%90%E5%88%87%E6%8D%A2%E5%9B%BE333-rc-upload-1582854164061-170.gif" alt="" width="300" height="250" />
              </a>
            </div>
          </div>
        </div>
        <DownloadAlert showStatus={this.state.MaskStatus} showMask={this.showMask}/>
      </div>
    );
  }
}
