
import React, { Component } from "react";
import { Connect } from "hoc/Connect";
import "sass/tupu.scss";
import CategoryBox from "components/stands/CategoryBox";
import TupuFigureNewsList from "components/stands/TupuFigureNewsList";
import TupuTrList from "components/stands/TupuTrList";
import SwiperBox from "components/stands/SwiperBox";
import Crumbs from "components/stands/Crumbs";

class ChanpintupuObj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crumbsData: [
        {
          path: "/",
          value: "产品图谱列表"
        }
      ] 
    };
  }
  componentDidMount () {
    this.props.getCanPinList({current: 1,name: 0})
    this.props.getHotTuPuLists()
  }

  componentWillUnmount () {
  }

  render () {
    let { canPinLists, hotLists} = this.props
    return (
      <div className="wrapper">
        <SwiperBox />
        <Crumbs crumbsData={this.state.crumbsData}/>

        {/* 分类入口 */}
        {canPinLists.categoryList && (<CategoryBox Content={canPinLists.categoryList} />)}
        <div className="clearfix">
          <div className="module-section">
            <table className="tupu-list">
              <thead>
                <tr>
                  <th>应急行业产品图谱</th>
                  <th>所属行业</th>
                  <th>时间</th>
                  <th>类型</th>
                  <th>下载次数</th>
                </tr>
              </thead>
              <tbody>
                {
                  !!canPinLists.graphList && canPinLists.graphList.map((item,index)=>{
                    return (<TupuTrList Detail={item} key={`id_${index}`} linkUrl="/stands/chanpintupuDetail" />)
                  })
                }
              </tbody>
            </table>
            <div className="load-more-button">加载更多···</div>
          </div>

          <div className="module-side">
            <div className="model">
              <div className="header">
                <h3>图谱推荐</h3>
              </div>
              <ul className="tupu-figure-news-list">
                {
                  !!hotLists.length && hotLists.map((item,index)=>{
                    return (
                      <TupuFigureNewsList ItemInfo={item} key={`id_${index}`} linkUrl="/stands/chanpintupuDetail"/>
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

      </div>
    );
  }
}

export default Connect({
  name: 'canpintupuStore',
  need: [],
  func: ['getCanPinList','getHotTuPuLists'],
}, ChanpintupuObj);