/**
 * 忘记密码和虫子密码的form表单
 * name => 需要用户名称
 * remember => 同意
 */
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { phoneReg ,spance  } from  'utils/base' ;
import Mes from "components/Mes";
import Agreement from "./Agreement";



function RegAndForget(props) {
  useEffect(() => {
    return () => {
      clearInterval(stopCountDown.current);
      clearTimeout(stopSubmit.current);
    };
  }, []);

  const { getFieldDecorator } = props.form;
  const [disabled, change] = useState(true); //是否禁用提交按钮
  const [showAgree, newShowAgree] = useState(false); //是否显示用户协议
  const [checKStatus, newCheckStatus] = useState(false); //是否勾选了用户协议
  const [codeTxt, newCodeTxt] = useState("发送验证码");
  const [codeFlag, newCodeFlag] = useState(true);
  const [codeDisable, changeCodeDisable] = useState(true);
  const [submitFlag, changeSubmit] = useState(true);
  const stopCountDown = useRef(null); //防止倒计时还没结束，跳转之后不能关闭定时器导致的内存泄漏
  const stopSubmit = useRef(null);

  //确认用户协议
  function checkFun(e) {
    newCheckStatus(e.target.checked);
  }

  //确认密码校验一致
  function handleCfmPwd(rules, value, callback) {
    let loginpass = props.form.getFieldValue("password");
    if (loginpass !== value) {
      callback(new Error("两次密码输入不一致"));
    } else {
      // Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
      callback();
    }
  }
  //提交事件
  function beginSubmit(e) {
    e.preventDefault();
    if (!checKStatus && props.remember) {
      Mes("warning", "请同意用户协议");
      return;
    }
    props.form.validateFields((err, values) => {
      if (!err && !disabled) {
        change(true);
        let flag = setTimeout(() => change(false), 1000);
        stopSubmit.current = flag;
        props.handleSubmit(values);
      }
    });
  }

  //验证是否全部输入完毕
  function getAllValues(e) {
    let values = props.form.getFieldsValue();
    let valArr = Object.values(values);
    let isOk = valArr.includes(undefined);
    if (e.target.id === "phone") {
      //是否可以点击发送验证码
      let phone = e.target.value;
      if (phoneReg.test(phone) && codeFlag ) {
        changeCodeDisable(false);
      } else {
        changeCodeDisable(true);
      }
    }
    //是否可以点击提交按钮
    if (!isOk) {
      change(false);
    } else {
      change(true);
    }
  }

  //开始倒计时
  function beginCountDown() {
    let sum = 60;
    let timer = setInterval(() => {
      sum--;
      newCodeTxt(`${sum}秒后重新获取`);
      if (sum === 0) {
        clearInterval(timer);
        newCodeTxt("重新获取");
        newCodeFlag(true);
        changeCodeDisable(false);
      }
    }, 1000);
    stopCountDown.current = timer;
    return timer;
  }

  //获取验证码
  function getCode() {
    if (!codeFlag) return;
    newCodeFlag(false);
    changeCodeDisable(true);
    beginCountDown();
    let phone = props.form.getFieldValue("phone");
    props.getCodeApi(phone);
  }

  return (
    <Form className="login-form" hideRequiredMark onSubmit={beginSubmit}>
      {props.name && (
        <Form.Item label="用户名称" colon={false}>
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "请输入用户名称"
              },
              {
                pattern: spance,
                message: "请不要输入空格"
              }
            ]
          })(<Input placeholder="请输入用户名称" onChange={getAllValues} />)}
        </Form.Item>
      )}

      <Form.Item label="手机号码" colon={false}>
        {getFieldDecorator("phone", {
          rules: [
            {
              required: true,
              message: "请输入手机号码"
            },
            {
              pattern: phoneReg,
              message: "手机号码格式错误"
            }
          ]
        })(
          <Input
            placeholder="请输入手机号码"
            onChange={getAllValues}
            maxLength={11}
          />
        )}
      </Form.Item>

      <Form.Item label="验证码" colon={false}>
        <div className="rAf-code-box">
          {getFieldDecorator("code", {
            rules: [
              {
                required: true,
                message: "请输入验证码"
              },
              {
                len: 6,
                message: "请输入6位验证码"
              }
            ]
          })(
            <Input
              placeholder="请输入验证码"
              onChange={getAllValues}
              maxLength={6}
            />
          )}
          <Button type="primary" disabled={codeDisable} onClick={getCode}>
            {codeTxt}
          </Button>
        </div>
      </Form.Item>

      <Form.Item label="设置密码" colon={false}>
        {getFieldDecorator("password", {
          rules: [
            {
              required: true,
              message: "请设置您的密码"
            },
            {
              pattern:spance,
              message: "请不要输入空格"
            },
            {
              pattern: /^[a-zA-Z]\w{5,19}$/,
              message: "密码必须以字母开头,并且不能低于六位数"
            }
          ]
        })(
          <Input.Password
            placeholder="支持6-15位数字、字母和标点符号"
            onChange={getAllValues}
          />
        )}
      </Form.Item>

      <Form.Item label="确认密码" colon={false}>
        {getFieldDecorator("repeat", {
          rules: [
            {
              required: true,
              message: "请再次输入您的密码"
            },
            {
              validator: (rules, value, callback) => {
                handleCfmPwd(rules, value, callback);
              }
            }
          ]
        })(
          <Input.Password
            placeholder="请再次输入密码"
            onChange={getAllValues}
          />
        )}
      </Form.Item>

      {props.remember && (
        <Form.Item>
          <div className="register-agree">
            <Checkbox onChange={checkFun}></Checkbox>
            <span className="agree-text">
              我已阅读并接受
              <Agreement showPopver={showAgree} />
              <a onClick={() => newShowAgree(!showAgree)}>
                《雷霆应急网注册协议》
              </a>
              ，同步开通雷霆 应急邦账号
            </span>
          </div>
        </Form.Item>
      )}

      <div className="submit-box">
        <Button type="primary" htmlType="submit" disabled={disabled}>
          {props.btnTxt}
        </Button>
      </div>

      <div className="jump-box">
        已有帐号，
        <Link to="/user">立即登录</Link>
      </div>
    </Form>
  );
}

export default Form.create()(RegAndForget);
