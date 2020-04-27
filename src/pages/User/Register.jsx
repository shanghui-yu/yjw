import React  from "react";
import { Modal } from 'antd';
import { withRouter } from "react-router-dom";
import RegisterUi from "./Ui/RegAndForget";
import http from "service/user";

function Register(props) {

  //注册
  async function submit(data) {
    await http.registerApi(data);
    const modal = Modal.success();
    modal.update({
      maskClosable:true,
      okText:'立即登录',
      content:'注册成功',
      onOk:()=> props.history.replace('/user')
    })
  }

  //获取验证码
  async function getCodeApi(phone) {
   await http.getCodeApi(phone);
  }


  return (
    <div>
      <RegisterUi
        name={true}
        btnTxt="注册"
        cancelText="注册"
        centered={true}
        remember={true}
        handleSubmit={submit}
        getCodeApi={getCodeApi}
      />
    </div>
  );
}

export default withRouter(Register);
