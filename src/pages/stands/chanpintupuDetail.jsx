
import React, { Component } from "react";
import "sass/tupu.scss"
import { Connect } from "hoc/Connect";
import { Link } from "react-router-dom";
import Crumbs from "components/stands/Crumbs";
import TupuFigureNewsList from "components/stands/TupuFigureNewsList";
import moment from "moment";
class ChanpintupuDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.props.getHotTuPuLists()
    this.props.getDetail(this.props.match.params.id)
  }

  componentWillUnmount () {
  }

  render () {
    let { hotLists, tupuDetail } = this.props
    return (
      <div className="wrapper">

        <Crumbs crumbsData={this.state.crumbsData} />

        <div className="clearfix">
          <div className="module-section">
            <div className="tupu-figure-intro">
              <div className="figure">
                <img src={tupuDetail.graphPath} alt=""/>
              </div>
              <h3>{tupuDetail.graphTitle}</h3>
              <div className="about-info">
                <span>所属行业：{tupuDetail.graphTitle}</span>
                <span>时间：{moment(tupuDetail.graphUploadTime).format('YYYY/MM/DD')}</span>
                <span>类型：{tupuDetail.graphIndustryCategory}</span>
                <span>下载量：{tupuDetail.graphClick}</span>
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
                <div dangerouslySetInnerHTML={{__html: tupuDetail.detailGraphIntroduction}} />
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
                  !!hotLists.length && hotLists.map((item, index) => {
                    return (
                      <TupuFigureNewsList ItemInfo={item} key={`id_${index}`} linkUrl="/stands/chanpintupuDetail" />
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

export default Connect({
  name: 'canpintupuStore',
  need: [],
  func: ['getDetail', 'getHotTuPuLists'],
}, ChanpintupuDetail);