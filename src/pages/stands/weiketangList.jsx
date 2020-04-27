import React, { Component } from "react";
import "sass/weiketang.scss";
import ImgListBox from "components/stands/ImgListBox";
import CategoryBox from "components/stands/CategoryBox";
import Crumbs from "components/stands/Crumbs";
export default class WeiKeTangList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      newKecheng: [
        {
          path:'/stands/weiketangDetail',
          img:'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
          title:'确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理',
          total:'100',
          tags: ['卫生防疫', '救援运载','动力燃料']
        },
        {
          path: '/stands/weiketangDetail',
          img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
          title: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理2',
          total: '100',
          tags: ['卫生防疫', '救援运载', '动力燃料']
        },
        {
          path: '/stands/weiketangDetail',
          img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
          title: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理3',
          total: '100',
          tags: ['卫生防疫', '救援运载', '动力燃料']
        },
        {
          path: '/stands/weiketangDetail',
          img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
          title: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理2',
          total: '100',
          tags: ['卫生防疫', '救援运载', '动力燃料']
        },
        {
          path: '/stands/weiketangDetail',
          img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
          title: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理3',
          total: '100',
          tags: ['卫生防疫', '救援运载', '动力燃料']
        },
        {
          path: '/stands/weiketangDetail',
          img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
          title: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理2',
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
      crumbsData: [
        {
          path: "/stands/weiketang",
          value: "雷霆微课堂"
        },
        {
          path: "/",
          value: "课堂列表"
        }
      ] 
    };
  }
  componentDidMount () {

  }

  componentWillUnmount () {
  }

  render () {
    let { crumbsData,newKecheng, category} = this.state
    return (
      <div className="wrapper">
        <Crumbs crumbsData={crumbsData}/>
        {/* 分类入口 */}
        <CategoryBox Content={category} />

        <div className="model">
          <div className="kecheng-figure-news-list">
            <ul className="clearfix">
              {!!newKecheng.length && newKecheng.map((item, index) => {
                return (
                  <ImgListBox DataList={item} key={`id_${index}`} />
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
