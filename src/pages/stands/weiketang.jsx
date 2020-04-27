import React, { Component, Suspense } from "react";
import "sass/weiketang.scss";
import ImgListBox from "components/stands/ImgListBox";
import CategoryBox from "components/stands/CategoryBox";
import SwiperBox from "components/stands/SwiperBox";


export default class WeiKeTang extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      newKecheng: [
        {
          path: '/stands/weiketangDetail',
          img: 'https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png',
          title: '确诊菲佣曾去中环大会堂聚会导致感染了病毒 现在如何治理',
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
      category:[
        {
          label:'行业类型',
          tabs:[
            {
              name:'企业介绍',
              path:'/stands/weiketangList'
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
              path:'/stands/weiketangList'
            },
            {
              name: '企业介绍',
              path:'/stands/weiketangList'
            },
            {
              name: '企业介绍',
              path:'/stands/weiketangList'
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
    let { newKecheng, category} = this.state
    return (
      <div className="wrapper">
        <SwiperBox />

        <div className="icon-navs clearfix">
          <div className="item">
            <a href="/" className="zhuanjiajiangzuo">
              <h4>专家讲座</h4>
              <p>行业专家打造精品课程</p>
            </a>
          </div>
          <div className="item">
            <a href="/" className="qiyejieshao">
              <h4>企业介绍</h4>
              <p>企业介绍企业介绍</p>
            </a>
          </div>
          <div className="item">
            <a href="/" className="chanpinyanjiu">
              <h4>产品研究</h4>
              <p>产品研究产品研究产品研究</p>
            </a>
          </div>
          <div className="item">
            <a href="/" className="yingjizhishi">
              <h4>应急知识</h4>
              <p>应急知识应急知识应急知识</p>
            </a>
          </div>
        </div>
        {/* 分类入口 */}
        <CategoryBox Content={category}/>

        <div className="model">
          <div className="header">
            <h3>最新课程</h3>
          </div>
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

        {/* 通栏广告位1 */}
        <div className="ad-div">
          <div>
            <a href="/">
              <img src="https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200324-111-rc-upload-1585014058883-106.jpeg" alt="" />
            </a>
          </div>
        </div>
        <div className="model">
          <div className="header">
            <h3>课程分类</h3>
          </div>
          <div className="kecheng-figure-news-list">
            <ul className="clearfix">
              {!!newKecheng.length && newKecheng.map((item,index)=>{
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
