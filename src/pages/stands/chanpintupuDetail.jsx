
import React, { Component } from "react";
import "sass/tupu.scss"
import TupuFigureNewsList from "components/stands/TupuFigureNewsList";
import { Link } from "react-router-dom";
import Crumbs from "components/stands/Crumbs";

export default class ChanpintupuDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      crumbsData: [
        {
          path: "/stands/chanpintupu",
          value: "产品图谱列表"
        },
        {
          path: "/",
          value: "详情"
        }
      ] 
    };
  }
  componentDidMount () {
    window.scrollTo(0, 0);
  }

  componentWillUnmount () {
  }

  render () {
    let { tupuList, crumbsData } = this.state
    return (
      <div className="wrapper">

        <Crumbs crumbsData={crumbsData} />

        <div className="clearfix">
          <div className="module-section">
            <div className="tupu-figure-intro">
              <div className="figure">
                <img src="https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png" alt=""/>
              </div>
              <h3>大城小爱：抗击疫情中一个武汉基层民警的独白,抗击疫情中一个武汉 基层民警的独白,抗击疫情中一个武汉基层民警的独白......</h3>
              <div className="about-info">
                <span>所属行业：防护用品</span>
                <span>时间：2020/1/1</span>
                <span>类型：完整版</span>
                <span>下载量：100</span>
              </div>
              <div className="tools">
                <span className="button" id="download">下载</span>
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
                <h3>热门图谱</h3>
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
              <Link to="/">
                <img src="https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200304-%E5%90%88%E6%88%90%E5%88%87%E6%8D%A2%E5%9B%BE333-rc-upload-1582854164061-170.gif" alt="" width="300" height="250" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
