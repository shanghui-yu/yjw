
import React, { Component, Suspense } from "react";
import "sass/userInfo/my.scss";
import { Link } from "react-router-dom";


export default class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount () {

  }

  componentWillUnmount () {
  }

  render () {
    return (
      <div className="myspace clearfix">
          <div className="user-info">
            <Link to="/userInfo/mySet">个人信息设置 &gt;</Link>
            <div>
              <span className="avatar">
                <img src="https://wx.qlogo.cn/mmopen/NKkTUbVKQ0vpib52elyzpeNYopDmNdNowvjczrgpcPrDxIQcqOf1sogPOev95haibO4IfD6qmiaHXLT8ic40X4syicAwPSzKVNZkic/64" alt="" />
              </span>
              用户昵称
            </div>
          </div>
      </div>
    );
  }
}
