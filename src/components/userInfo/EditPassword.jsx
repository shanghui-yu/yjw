import React, { Component, Fragment, Suspense } from "react";
import { Link } from "react-router-dom";

export default class EditPassword extends Component {
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
      <div className="alert-plugin edit-password visible">
        <div className="mask"></div>
        <div className="alert">
          <div className="header">
            <div className="close" onClick={this.showPassworkMask}>×</div>
            修改密码
          </div>
          <div className="main form">
            <div className="item">
              <label>当前密码</label>
              <div className="right">
                <input type="text" placeholder="" />
              </div>
            </div>
            <div className="item">
              <label>密码</label>
              <div className="right">
                <input type="text" placeholder="" />
                  <p className="tip">支持英文数字，限制6-20个字。</p>
              </div>
            </div>
            <div className="item">
              <label>确认密码</label>
              <div className="right">
                <input type="text" placeholder="" />
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
