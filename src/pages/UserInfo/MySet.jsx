
import React, { Component, Suspense } from "react";
import "sass/userInfo/myset.scss";
import EditName from "components/userInfo/EditName";
import EditPassword from "components/userInfo/EditPassword";
import EditPhoto from "components/userInfo/EditPhoto";
import { Link } from "react-router-dom";

export default class MySet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NameMaskStatus:false,
      PassWordMaskStatus: false,
      photoStatus:false
    };
  }
  componentDidMount () {

  }

  componentWillUnmount () {
  }
  showNameMask = (e) =>{
    this.setState({ NameMaskStatus: !this.state.NameMaskStatus });
  }
  showPasswordMask = (e) => {
    this.setState({ PassWordMaskStatus: !this.state.PassWordMaskStatus });
  }
  showPhotoStatus = (e) => {
    this.setState({ photoStatus: !this.state.photoStatus });
  }
  render () {
    return (
      <div className="clearfix">
        <div className="main-wraper">
          <div className="user-info">
            <div className="header">
              <h3 className="title">个人信息</h3>
              <h4 className="subtitle">账号设置</h4>
            </div>
            <ul className="user-set">
              <li>
                <div className="label">头像</div>
                <div className="center">
                  <img src="http://placehold.it/40x40" alt="" />
                    </div>
                <button id="change-photo" onClick={this.showPhotoStatus}>修改</button>
              </li>
              <li>
                <div className="label">昵称</div>
                <div className="center">
                  <p>昵称</p>
                </div>
                <button id="change-name" onClick={this.showNameMask}>修改</button>
              </li>
              <li>
                <div className="label">绑定手机</div>
                <div className="center">
                  <p>138*****000</p>
                </div>
                <button>
                  <Link to="/userInfo/editPhone">修改</Link>
                </button>
              </li>
              <li>
                <div className="label">登录密码</div>
                <div className="center">
                  <p>建议您定期更换密码，设置安全性高的密码可以使帐号更安全</p>
                </div>
                <button onClick={this.showPasswordMask}>修改</button>
              </li>
            </ul>
          </div>
        </div>
        {
          this.state.photoStatus && (<EditPhoto showMask={this.showPhotoStatus} />)
        }
        {
          this.state.NameMaskStatus && (<EditName showMask={this.showNameMask} />)
        }
        {
          this.state.PassWordMaskStatus && (<EditPassword showMask={this.showPasswordMask} />)
        }
      </div>
    );
  }
}
