import React from "react";
import { Modal } from 'antd';
import RegisterUi from "./Ui/RegAndForget";
import { withRouter } from "react-router-dom";
import http from "service/user";

function ForGetPwd(props) {
  async function submit(data) {
    await http.forgetPassword(data);
    const modal = Modal.success();
    modal.update({
      maskClosable:true,
      okText:'立即登录',
      content:'重置密码成功',
      onOk:()=> props.history.replace('/user')
    })
  }

  //获取验证码
  async function getCodeApi(phone) {
    await http.getCodeApi(phone);
  }
  return (
    <div>
      <h4
        style={{
          paddingBottom: "20px",
          borderBottom: "1px solid #EEEEEE"
        }}
      >
        重置密码
      </h4>
      <RegisterUi
        btnTxt="确认"
        handleSubmit={submit}
        getCodeApi={getCodeApi}
      />
    </div>
  );
}

export default withRouter(ForGetPwd);
