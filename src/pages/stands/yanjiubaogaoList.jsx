import React, { Component, Suspense } from "react";
import "sass/yanjiubaogao.scss";
import "sass/tupu.scss";
import SwiperBox from "components/stands/SwiperBox";
import TupuTrList from "components/stands/TupuTrList";
import CategoryBox from "components/stands/CategoryBox";
import TupuFigureNewsList from "components/stands/TupuFigureNewsList";
import Crumbs from "components/stands/Crumbs";
export default class YanJiuBaoGaoList extends Component {
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
          label: '行业类型',
          tabs: [
            {
              name: '企业介绍',
              path: '/stands/weiketangList'
            },
            {
              name: '企业介绍',
              path: '/stands/weiketangList'
            },
            {
              name: '企业介绍',
              path: '/stands/weiketangList'
            }
          ]
        },
        {
          label: '行业类型',
          tabs: [
            {
              name: '企业介绍',
              path: '/stands/weiketangList'
            },
            {
              name: '企业介绍',
              path: '/stands/weiketangList'
            },
            {
              name: '企业介绍',
              path: '/stands/weiketangList'
            }
          ]
        }
      ],
      TableItem: [
        {
          td1: {
            link: '/stands/yanjiubaogaoDetail',
            img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
            title: '收钱不办事，违规返还6000万 出让金区委书记“借”......',
            content: '2019年6月5日，安庆市宜秀区原琪受贿案二审开庭，安庆市......',
          },
          td2: '299',
          td3: '防护用品',
          td4: '100页',
          td5: '2020/1/1',
          td6: '完整版',
          td7: '100',
        },
        {
          td1: {
            link: '/stands/yanjiubaogaoDetail',
            img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
            title: '收钱不办事，违规返还6000万 出让金区委书记“借”......',
            content: '2019年6月5日，安庆市宜秀区原琪受贿案二审开庭，安庆市......',
          },
          td2: '299',
          td3: '防护用品',
          td4: '100页',
          td5: '2020/1/1',
          td6: '完整版',
          td7: '100',
        }
      ],
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
    this.checkTypeList(this.props.match.params.type)
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
    let { crumbsData, category, TableItem, tupuList } = this.state
    return (
      <div className="wrapper">
        <SwiperBox />
        <Crumbs crumbsData={crumbsData}></Crumbs>

        {/* 分类入口 */}
        <CategoryBox Content={category} />
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
                  !!TableItem.length && TableItem.map((item, index) => {
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
                <h3>热门报告</h3>
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
      </div>
    );
  }
}
