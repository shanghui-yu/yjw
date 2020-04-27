
import React, { Component, Suspense } from "react";
import { Link } from "react-router-dom";
import "sass/phone.scss";


export default class EditPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step:1
    };
  }
  componentDidMount () {

  }

  componentWillUnmount () {
  }

  render () {
    let { step} =this.state
    return (
      <div className="wrapper clearfix">
          <div className="title">
            <h3>通过短信验证</h3>
          </div>
          <div className="progress-bar">
            <div className={step >= 1 ? "step active" :'step' }>
              <i>1</i>
              <div className="info"><h5>步骤一</h5><p>验证身份</p></div>
            </div>
            <div className="bar"></div>
            <div className={step >= 2 ? "step active" : 'step'}>
              <i>2</i>
              <div className="info"><h5>步骤二</h5><p>修改手机号码</p></div>
            </div>
            <div className="bar"></div>
            <div className={step === 3 ? "step active" : 'step'}>
              <i>3</i>
              <div className="info"><h5>步骤三</h5><p>完成</p></div>
            </div>
          </div>

          {/* 步骤一 */}
          <div className={step === 1 ? "phone-form" :'phone-form hidden'}>
            <h5>已绑定的手机：138*****000</h5>
            <p>若该手机号已无法使用请联系客服</p>
            <div className="code form-item">
              <label>
                  验证码：
              </label>
              <div className="input">
                  <input type="text" placeholder="请输入验证码" />
                  <div className="send">发送验证码</div>
              </div>
            </div>
            <button>下一步</button>
          </div>
          {/* 步骤二 */}
          <div className={step === 2 ? "phone-form" : 'phone-form hidden'}>
            <div className="form-item">
              <label>
                手机号码：
                  </label>
              <div className="input">
                <input type="text" placeholder="请输入验证码" />
              </div>
            </div>
            <div className="form-item code">
              <label>
                验证码：
                  </label>
              <div className="input">
                <input type="text" placeholder="请输入验证码" />
                <div className="send">发送验证码</div>
              </div>
            </div>
            <button>下一步</button>
          </div>
          {/* 步骤三 */}
          <div className={step === 3 ? "phone-form" : 'phone-form hidden'}>
              <h5>手机号码捆绑成功</h5>
              <p>若该手机号已无法使用请联系客服</p>
              <button>下一步</button>
          </div>
      </div>
    );
  }
}
