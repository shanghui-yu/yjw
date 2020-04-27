
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
      newKecheng: [
        {
          img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
          title: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理',
          total: '100',
          tags: ['卫生防疫', '救援运载', '动力燃料']
        },
        {
          img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
          title: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理2',
          total: '100',
          tags: ['卫生防疫', '救援运载', '动力燃料']
        },
        {
          img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
          title: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理3',
          total: '100',
          tags: ['卫生防疫', '救援运载', '动力燃料']
        },
        {
          img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
          title: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理2',
          total: '100',
          tags: ['卫生防疫', '救援运载', '动力燃料']
        },
        {
          img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
          title: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理3',
          total: '100',
          tags: ['卫生防疫', '救援运载', '动力燃料']
        },
        {
          img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
          title: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理2',
          total: '100',
          tags: ['卫生防疫', '救援运载', '动力燃料']
        },
        {
          img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
          title: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理3',
          total: '100',
          tags: ['卫生防疫', '救援运载', '动力燃料']
        },
      ],
      category: [
        {
          label: '行业分类',
          tabs: [
            {
              name: '企业介绍',
              path: '/'
            },
            {
              name: '企业介绍',
              path: '/'
            },
          ]
        },
        {
          label: '行业类型',
          tabs: [
            {
              name: '企业介绍',
              path: '/'
            },
            {
              name: '企业介绍',
              path: '/'
            }
          ]
        }
      ],
      tupuList:[
        {
          link: '/stands/chanpintupuDetail',
          img:'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
          content:'旧恨又添新仇！日韩贸易对抗或重新定义',
          tabs:'防护用品',
          total:'100'
        },
        {
          link: '/stands/chanpintupuDetail',
          img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
          content: '旧恨又添新仇！日韩贸易对抗或重新定义',
          tabs: '防护用品',
          total: '100'
        },
      ],
      TableItem:[
        {
          td1:{
            link:'/stands/chanpintupuDetail',
            img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
            title: '收钱不办事，违规返还6000万 出让金区委书记“借”......',
            content: '2019年6月5日，安庆市宜秀区原琪受贿案二审开庭，安庆市......',
          },
          td2: '防护用品',
          td3: '2020/1/1',
          td4: '完整版',
          td5: '100',
        },
        {
          td1: {
            link: '/stands/chanpintupuDetail',
            img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
            title: '收钱不办事，违规返还6000万 出让金区委书记“借”......',
            content: '2019年6月5日，安庆市宜秀区原琪受贿案二审开庭，安庆市......',
          },
          td2: '防护用品',
          td3: '2020/1/1',
          td4: '完整版',
          td5: '100',
        }
      ],
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
  }

  componentWillUnmount () {
  }

  render () {
    let { tupuList, category, TableItem, crumbsData} = this.state
    return (
      <div className="wrapper">
        <SwiperBox />
        <Crumbs crumbsData={crumbsData}/>

        {/* 分类入口 */}
        <CategoryBox Content={category} />

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
                  !!TableItem.length && TableItem.map((item,index)=>{
                    return (<TupuTrList Detail={item} key={`id_${index}`} />)
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
                  !!tupuList.length && tupuList.map((item,index)=>{
                    return (
                      <TupuFigureNewsList ItemInfo={item} key={`id_${index}`}/>
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
  name: 'canpintupu',
  need: [],
  func: ['getCanPinList'],
}, ChanpintupuObj);