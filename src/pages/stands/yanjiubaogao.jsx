import React, { Component, Suspense } from "react";
import "sass/yanjiubaogao.scss";
import ImgListBox from "components/stands/ImgListBox";
import CategoryBox from "components/stands/CategoryBox";
import ReportsCloumn from "components/stands/ReportsCloumn";
import SwiperBox from "components/stands/SwiperBox";
import { Connect } from "hoc/Connect";

class YanJiuBaoGao extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount () {
    this.props.getBaoGaoLists()
    this.props.getBaoGaoBestLists()
  }

  componentWillUnmount () {
  }

  render () {
    let { BaoGaoBest, baoGaoLists } = this.props
    return (
      <div className="wrapper">
        <SwiperBox />
        
        <div className="model">
          <div className="header">
            <h3>一张图看懂系列报告</h3>
          </div>
          {baoGaoLists.categoryList && (<CategoryBox Content={baoGaoLists.categoryList} LinkUrl='/stands/yanjiubaogaoList/1'/>)}
          <div className="report-figure-news-list">
            <ul className="clearfix">
              {baoGaoLists.reportList && baoGaoLists.reportList.records.map((item, index) => {
                return (
                  <ImgListBox DataList={item} key={`id_${index}`} LinkUrl='/stands/yanjiubaogaoDetail/1' />
                )
              })}
            </ul>
          </div>
        </div>

        {/*  通栏广告位1  */}
        <div className="ad-box">
          <a href="/">
            <img src="https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200324-111-rc-upload-1585014058883-106.jpeg" alt="" />
          </a>
        </div>

        <div className="model">
          <div className="header">
            <h3>精品专题报告</h3>
          </div>
          {BaoGaoBest.categoryList && (<CategoryBox Content={BaoGaoBest.categoryList} LinkUrl='/stands/yanjiubaogaoList/2' />)}
          <div className="reports-cloumn-wrap">
            {/* <div className="clearfix">
              {BaoGaoBest.reportList && BaoGaoBest.reportList.records.map((item, index) => {
                return (
                  <ReportsCloumn DataList={item} key={`id_${index}`} LinkUrl='/stands/yanjiubaogaoDetail/1'/>
                )
              })}
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
export default Connect({
  name: 'yanjiubaogaoStore',
  need: [],
  func: ['getBaoGaoBestLists','getBaoGaoLists'],
}, YanJiuBaoGao);