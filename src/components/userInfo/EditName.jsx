import React, { Component, Fragment, Suspense } from "react";
import { Link } from "react-router-dom";

export default class EditName extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
  }
  showNameMask = () => { // 学习挣钱，调用父组件方法
    this.props.showMask();
  }
  render () {
    return (
      <div className="alert-plugin edit-name visible">
        <div className="mask"></div>
        <div className="alert">
          <div className="header">
            <div className="close" onClick={this.showNameMask}>×</div>
            修改昵称
          </div>
          <div className="main form">
            <div className="item">
              <label>当前昵称</label>
              <div className="right">
                <span>超级无敌美少女</span>
              </div>
            </div>
            <div className="item">
              <label>新昵称</label>
              <div className="right">
                <input type="text" placeholder="" />
                  <p className="tip">支持中文英文数字，限制1-20个字。</p>
              </div>
            </div>
          </div>
          <div className="footer">
            <button className="submit">确认修改</button>
            <button className="cancel">取消</button>
          </div>
        </div>
      </div>
    );
  }
}
