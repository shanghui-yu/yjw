import React, { Component } from "react";
import { Link } from "react-router-dom";
import "sass/yanjiubaogao.scss";
import "sass/tupu.scss";
import DownloadAlert from "components/stands/DownloadAlert";
import Crumbs from "components/stands/Crumbs";
import TupuFigureNewsList from "components/stands/TupuFigureNewsList";
import { Connect } from "hoc/Connect";
import moment from "moment";
class YanJiuBaoGaoDetail extends Component {
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
    this.props.getBaoGaoDetail(
      {
        reportId: this.props.match.params.id,
        reportType: this.props.match.params.reportType,
      }
    )
  }

  componentWillUnmount () {
  }

  showMask = (e) => {
    this.setState({ MaskStatus: !this.state.MaskStatus });
  }

  render () {
    let { crumbsData, tupuList} = this.state
    let { baoGaoDetail} = this.props
    return (
      <div className="wrapper">
        <Crumbs crumbsData={crumbsData}></Crumbs>
        <div className="clearfix">
          <div className="module-section">
            <div className="tupu-figure-intro">
              <div className="figure">
                <img src={baoGaoDetail.reportPath} alt="" />
              </div>
              <h3>{baoGaoDetail.reportTitle}</h3>
              <div className="about-info">
                <span>所属行业：{baoGaoDetail.reportIndustryCategory}</span>
                <span>时间：{moment(baoGaoDetail.reportUploadTime).format('YYYY/MM/DD')}</span>
                <span>类型：{baoGaoDetail.reportIndustryCategory}</span>
                <span>下载量：{baoGaoDetail.reportClick}</span>
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
                <div dangerouslySetInnerHTML={{ __html: baoGaoDetail.content }} />
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
                      <TupuFigureNewsList ItemInfo={item} key={`id_${index}`} linkUrl={`/stands/yanjiubaogaoDetail/1}`} />
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
export default Connect({
  name: 'yanjiubaogaoStore',
  need: [],
  func: ['getBaoGaoDetail'],
}, YanJiuBaoGaoDetail);