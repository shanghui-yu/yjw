import React, { Component, Suspense } from "react";
import "sass/yanjiubaogao.scss";
import ImgListBox from "components/stands/ImgListBox";
import CategoryBox from "components/stands/CategoryBox";
import ReportsCloumn from "components/stands/ReportsCloumn";
import SwiperBox from "components/stands/SwiperBox";


export default class YanJiuBaoGao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newKecheng: [
        {
          path: '/stands/yanjiubaogaoDetail',
          img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
          title: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理',
          total: '100',
          tags: ['卫生防疫', '救援运载', '动力燃料']
        },
        {
          path: '/stands/yanjiubaogaoDetail',
          img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
          title: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理2',
          total: '100',
          tags: ['卫生防疫', '救援运载', '动力燃料']
        },
        {
          path: '/stands/yanjiubaogaoDetail',
          img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
          title: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理3',
          total: '100',
          tags: ['卫生防疫', '救援运载', '动力燃料']
        },
        {
          path: '/stands/yanjiubaogaoDetail',
          img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
          title: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理2',
          total: '100',
          tags: ['卫生防疫', '救援运载', '动力燃料']
        },
        {
          path: '/stands/yanjiubaogaoDetail',
          img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
          title: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理3',
          total: '100',
          tags: ['卫生防疫', '救援运载', '动力燃料']
        },
        {
          path: '/stands/yanjiubaogaoDetail',
          img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
          title: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理2',
          total: '100',
          tags: ['卫生防疫', '救援运载', '动力燃料']
        },
      ],
      category: [
        {
          tabs: [
            {
              name: '企业介绍',
              path: '/stands/yanjiubaogaoList/1'
            },
            {
              name: '企业介绍',
              path: '/stands/yanjiubaogaoList/1'
            },
            {
              name: '企业介绍',
              path: '/stands/yanjiubaogaoList/1'
            }
          ]
        },
        {
          tabs: [
            {
              name: '企业介绍',
              path: '/stands/yanjiubaogaoList/1'
            },
            {
              name: '企业介绍',
              path: '/stands/yanjiubaogaoList/1'
            },
            {
              name: '企业介绍',
              path: '/stands/yanjiubaogaoList/1'
            }
          ]
        }
      ],
      category2: [
        {
          tabs: [
            {
              name: '企业介绍',
              path: '/stands/yanjiubaogaoList/2'
            },
            {
              name: '企业介绍',
              path: '/stands/yanjiubaogaoList/2'
            },
            {
              name: '企业介绍',
              path: '/stands/yanjiubaogaoList/2'
            }
          ]
        },
        {
          tabs: [
            {
              name: '企业介绍',
              path: '/stands/yanjiubaogaoList/2'
            },
            {
              name: '企业介绍',
              path: '/stands/yanjiubaogaoList/2'
            },
            {
              name: '企业介绍',
              path: '/stands/yanjiubaogaoList/2'
            }
          ]
        }
      ],
      reports:[
        {
          title:'精品专题一',
          datas:[
            {
              img:'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
              content:'确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理'
            },
            {
              img: '',
              content: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理'
            },
            {
              img: '',
              content: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理'
            },
            {
              img: '',
              content: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理'
            }
          ]
        },
        {
          title: '精品专题一',
          datas: [
            {
              img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
              content: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理'
            },
            {
              img: '',
              content: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理'
            },
            {
              img: '',
              content: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理'
            },
            {
              img: '',
              content: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理'
            }
          ]
        },
        {
          title: '精品专题一',
          datas: [
            {
              img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
              content: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理'
            },
            {
              img: '',
              content: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理'
            },
            {
              img: '',
              content: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理'
            },
            {
              img: '',
              content: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理'
            }
          ]
        }
      ]
    };
  }
  componentDidMount () {

  }

  componentWillUnmount () {
  }

  render () {
    let { newKecheng, category, reports, category2} = this.state
    return (
      <div className="wrapper">
        <SwiperBox />
        
        <div className="model">
          <div className="header">
            <h3>一张图看懂系列报告</h3>
          </div>
          <CategoryBox Content={category} />
          <div className="report-figure-news-list">
            <ul className="clearfix">
              {!!newKecheng.length && newKecheng.map((item, index) => {
                return (
                  <ImgListBox DataList={item} key={`id_${index}`} />
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
          <CategoryBox Content={category2} />
          <div className="reports-cloumn-wrap">
            <div className="clearfix">
              {!!reports.length && reports.map((item, index) => {
                return (
                  <ReportsCloumn DataList={item} key={`id_${index}`} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
