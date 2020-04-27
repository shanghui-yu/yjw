import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { Tabs, Button, Checkbox } from "antd";
import { wechatEwm, phoneReg, b6En  } from "utils/base";
import Cookies from 'js-cookie'
import Mes from "components/Mes";
import http from "service/user";
import "sass/user/login.scss";
const { TabPane } = Tabs;

export default class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      tabsStatus: 0, // 0 ===密码登录  1===短信登录
      acthod: "",
      password: "",
      phone: "",
      code: "",
      codeTxt: "发送验证码",
      codeFlag: true
    };
    this.remember = false; //下次免登录
    this.countDown = null; //验证码定时器
  }

  componentWillUnmount() {
    clearInterval(this.countDown);
  }

  //获取用户输入的值
  getValues = (e, key) => {
    let val = e.target.value;
    this.setState(
      {
        [key]: val
      },
      () => {
        const { acthod, password, phone, code } = this.state;
        if (
          (acthod.length > 3 && password.length >= 4) ||
          (phoneReg.test(phone) && code.length === 6)
        ) {
          this.setState({ disabled: false });
        } else {
          this.setState({ disabled: true });
        }
      }
    );
  };
  //提交
  submit = async () => {
    const { acthod, password, phone, code, tabsStatus, disabled } = this.state;
    this.setState({ disabled: true }, () => {
      let res;
      if (!tabsStatus) {
        //账号密码登录
        res = http.firstLogin({
          phone: acthod,
          password
        });
      } else {
        //手机号登录
        res = http.phoneLogin({
          phone,
          code
        });
      }
      res
        .then(({ data }) => {
          this.setState({ disabled: false });
          let value = b6En(data);
          if (this.remember) {
            //下次免登录
            Cookies.set('useInfo', value,{expires: 30});
            // window.localStorage.setItem("userInfo", b6En(data));
            // window.sessionStorage.removeItem("userInfo");
          } else {
            Cookies.set('useInfo', value);
            // window.sessionStorage.setItem("userInfo", b6En(data));
            // window.localStorage.removeItem("userInfo");
          }
          this.props.history.replace("/");
        })
        .catch(() => this.setState({ disabled: false }));
    });
  };


  //获取验证码
  getCode = () => {
    const { phone, codeFlag } = this.state;
    if (!phoneReg.test(phone)) {
      Mes("error", "请输入正确的手机号格式");
      return;
    }
    if (!codeFlag) return;
    http.getCodeApi(phone);
    let sum = 60;
    this.countDown = setInterval(() => {
      sum--;
      this.setState({
        codeTxt: `${sum}秒后重新获取`,
        codeFlag: false
      });
      if (sum === 0) {
        clearInterval(this.countDown);
        this.setState({
          codeTxt: "重新获取",
          codeFlag: true
        });
      }
    }, 1000);
  };
  //tabs切换
  tabsCallback = key => {
    let tabsStatus = typeof key === "string" ? Number(key) : key;
    this.setState({
      tabsStatus,
      disabled: true,
      acthod: "",
      password: "",
      phone: "",
      code: ""
    });
  };

  //下次免登录
  checkFun = e => {
    this.remember = e.target.checked;
  };

  render() {
    const { disabled } = this.state;
    return (
      <div className="login-box">
        <div className="login-form">
          <Tabs defaultActiveKey="0" onChange={this.tabsCallback}>
            <TabPane tab="密码登录" key="0">
              {this.passwordLogin()}
            </TabPane>
            <TabPane tab="短信登录" key="1">
              {this.codeLogin()}
            </TabPane>
          </Tabs>
          <Button type="primary" disabled={disabled} onClick={this.submit}>
            登录
          </Button>
          <div className="login-form-footer">
            <Checkbox onChange={this.checkFun}>下次自动登录</Checkbox>
            <div className="route-box">
              <Link to="/user/forget">忘记密码</Link>
              <Link to="/user/register">注册</Link>
            </div>
          </div>
        </div>
        <div className="login-footer">
          <img src={wechatEwm} />
          <h6>扫描二维码，关注公众号</h6>
        </div>
      </div>
    );
  }

  passwordLogin = () => {
    const { acthod, password } = this.state;
    return (
      <div className="passwordLogin-box">
        <input
          placeholder="请输入账号"
          value={acthod}
          onChange={event => this.getValues(event, "acthod")}
        />
        <input
          placeholder="请输入密码"
          type="password"
          value={password}
          onChange={event => this.getValues(event, "password")}
        />
      </div>
    );
  };

  codeLogin = () => {
    const { phone, code, codeTxt } = this.state;
    return (
      <div className="codeLogin-box">
        <input
          placeholder="请输入手机号"
          value={phone}
          maxLength="11"
          onChange={event => this.getValues(event, "phone")}
        />
        <div className="code-box">
          <input
            placeholder="请输入验证码"
            value={code}
            maxLength="6"
            onChange={event => this.getValues(event, "code")}
          />
          <s onClick={this.getCode} className={/\d+/.test(codeTxt)?'':'active'} > {codeTxt} </s>
        </div>
      </div>
    );
  };
}
