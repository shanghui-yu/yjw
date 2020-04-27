import React, { Component, Fragment, Suspense } from "react";
import { Link } from "react-router-dom";

export default class DownloadAlert extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
  }
  showPassworkMask = () => { // 学习挣钱，调用父组件方法
    this.props.showMask();
  }
  render () {
    return (
      <div className={this.props.showStatus ? "alert-plugin":'hidden'}>
        <div className="mask"></div>
        <div className="alert">
          <div className="header">
            <div className="close" onClick={this.showPassworkMask}>×</div>
            友情提示
          </div>
          <div className="main">
            <div className="message">若您对我司出品的研究报告感兴趣，快 来和我们联系吧！</div>
              <p>联系电话：<Link to="tel:0755-22222222">0755-22222222</Link></p>
              <p>举报邮箱：<Link to="mailto:editor@86yingji.com">editor@86yingji.com</Link></p>
          </div>
        </div>
      </div>
    );
  }
}
