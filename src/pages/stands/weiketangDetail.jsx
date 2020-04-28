import React, { Component, Suspense } from "react";
import "sass/weiketang.scss";
import ImgListBox from "components/stands/ImgListBox";
import Crumbs from "components/stands/Crumbs";
import { Connect } from "hoc/Connect";
class WeiKeTangDetail extends Component {
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
      ],
      crumbsData: [
        {
          path: "/stands/weiketang",
          value: "雷霆微课堂"
        },
        {
          path: "/stands/weiketangList",
          value: "课堂列表"
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
  }

  componentWillUnmount () {
  }

  render () {
    let { newKecheng, crumbsData} = this.state
    return (
      <div className="wrapper">
        <Crumbs crumbsData={crumbsData} />
        <div className="video-container">
          <ul className="video-list">
            <li>
              <span>
                0《舍得智慧讲堂》梁建章：从少年班看中国 10分钟
              </span>
            </li>
            <li>
              <a href="/weiketang/detail">
                0《舍得智慧讲堂》梁建章：从少年班看中国 10分钟
              </a>
            </li>
          </ul>
          <div className="video-content">
            <div className="video">
              <video src=""></video>
            </div>
            <div className="content">
              <h3>吉利又放大招！花逍客一半的钱买双倍配置，哈弗H6地位不保，哈弗H6地位不保？</h3>
              <p>应用分类：航天航天</p>
              <p>
                <span>主讲人：超级无敌美少女</span>
                <span>发布日期：2019-11-06</span>
                <span>浏览量：1000</span>
              </p>
            </div>
          </div>
        </div>

        <div className="model">
          <div className="header">
            <h3>相关视频</h3>
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
        <div className="module clearfix">
          <div className="module-section">
            <div className="detail">
              <div className="tabs">
                <span data-rel="jieshao" className="current">课程介绍</span>
                <span data-rel="mulu">课程目录</span>
              </div>
              <div className="contents">
                <div id="jieshao">
                  <p>上游新闻记者（爆料微信号：shangyounews）获悉，该视频是8月6日上午乐山市委书记彭琳在当地一桥梁上指导抗洪救灾工作时，对乐山市水务局局长金玉梅提出要求，“河道上的违章建筑一个星期之内给我拆完，拆不完我撤你”。</p>
                </div>
                <div id="mulu">
                  <p>上游新闻记者（爆料微信号：shangyounews）获悉，该视频是8月6日上午乐山市委书记彭琳在当地一桥梁上指导抗洪救灾工作时，对乐山市水务局局长金玉梅提出要求，“河道上的违章建筑一个星期之内给我拆完，拆不完我撤你”。</p>
                </div>
              </div>
            </div>
          </div>
          <div className="module-side">
            <a href="tel:0755-22222222" className="contact">课程客服电话：0755-22222222</a>
            <div className="ad-box">
              <div id="">
                <a href="/">
                  <img src="https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200304-%E5%90%88%E6%88%90%E5%88%87%E6%8D%A2%E5%9B%BE333-rc-upload-1582854164061-170.gif" alt="" width="300" height="250" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Connect({
  name: 'weketangStore',
  need: [],
  func: [],
}, WeiKeTangDetail);