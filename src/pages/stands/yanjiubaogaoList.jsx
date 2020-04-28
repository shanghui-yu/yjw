import React, { Component, Suspense } from "react";
import { Link } from "react-router-dom";
import "sass/yanjiubaogao.scss";
import "sass/tupu.scss";
import SwiperBox from "components/stands/SwiperBox";
import CategoryBox from "components/stands/CategoryBox";
import TupuFigureNewsList from "components/stands/TupuFigureNewsList";
import Crumbs from "components/stands/Crumbs";
import { Connect } from "hoc/Connect";
import moment from "moment";
class YanJiuBaoGaoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crumbsData: [
        {
          path: "/stands/yanjiubaogao",
          value: "研究报告"
        },
        {
          path: "/",
          value: "一张图看懂系列报告列表"
        }
      ],
      page:1
    };
  }
  componentDidMount () {
    window.scrollTo(0, 0);
    this.checkTypeList(this.props.match.params.reportType)
    this.props.getBaoGaoType({
      reportType: this.props.match.params.reportType,
      current: this.state.page,
      name:this.props.match.params.name
    })
    this.props.getHotBaoGaoInfo()
  }

  componentWillUnmount () {
  }
  /**
   * @description: 判断研究报告列表类型
   * @param {string} 路由参数 
   */
  checkTypeList(type){
    var crubsDefalt = [
      {
        path: "/stands/yanjiubaogao",
        value: "研究报告"
      },
      {
        path: "/",
        value: "精品专题报告"
      }
    ]
    if (type==='2') {
      this.setState({ crumbsData: crubsDefalt });
    }
  }
  render () {
    let { crumbsData } = this.state
    let { baoGaoType, match,HotBaoGao} = this.props
    return (
      <div className="wrapper">
        <SwiperBox />
        <Crumbs crumbsData={crumbsData}></Crumbs>

        {/* 分类入口 */}
        {baoGaoType.categoryList && (<CategoryBox Content={baoGaoType.categoryList} LinkUrl={`/stands/yanjiubaogaoList/${match.params.reportType}`} />)}
        <div className="clearfix">
          <div className="module-section">
            <table className="tupu-list">
              <thead>
                <tr>
                  <th>研究报告</th>
                  <th>价格</th>
                  <th>所属行业</th>
                  <th>页码</th>
                  <th>时间</th>
                  <th>类型</th>
                  <th>浏览量</th>
                </tr>
              </thead>
              <tbody>
                {
                  baoGaoType.reportList && baoGaoType.reportList.records.map((item,index)=>{
                    return (
                      <tr key={`id_${index}`}>
                        <td width="429">
                          <div className="figure-news">
                            <Link to={`/stands/yanjiubaogaoDetail/${match.params.reportType}/${item.reportId}`} className="figure">
                              <img src={item.reportPath} alt="" />
                            </Link>
                            <Link to={`/stands/yanjiubaogaoDetail/${match.params.reportType}/${item.reportId}`} className="figcaption">{item.reportTitle}</Link>
                            <p>{item.content}</p>
                          </div>
                        </td>
                        <td>{item.reportIndustryCategory}</td>
                        <td>{moment(item.reportUploadTime).format('YYYY/MM/DD')}</td>
                        <td>{item.reportType}</td>
                        <td>{item.reportClick}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
            <div className="load-more-button">加载更多···</div>
          </div>

          <div className="module-side">
            <div className="model">
              <div className="header">
                <h3>热门报告</h3>
              </div>
              <ul className="tupu-figure-news-list">
                {
                  !!HotBaoGao.length && HotBaoGao.map((item, index) => {
                    return (
                      <TupuFigureNewsList ItemInfo={item} key={`id_${index}`} linkUrl={`/stands/yanjiubaogaoDetail/${match.params.reportType}`} />
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
  name: 'yanjiubaogaoStore',
  need: [],
  func: ['getBaoGaoType','getHotBaoGaoInfo'],
}, YanJiuBaoGaoList);