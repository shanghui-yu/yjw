
import React, { Component, Suspense } from "react";
import { Select } from 'antd';
import "sass/userInfo/MyManage.scss";

const { Option } = Select;
export default class MyManage extends Component {
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
          <div className="my-manage">
            <div className="header">
              <h3 className="title">个人信息</h3>
              <h4 className="subtitle">会员信息管理</h4>
            </div>
            <form action="/" method="POST" className="manage-form">
              <ul className="form-list">
                <li>
                  <label>请选择行业：</label>
                  <Select defaultValue="lucy" style={{ width: 336, height: 50 }}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </li>
                <li>
                  <label>请上传企业LOGO：</label>
                  <div className="right">
                    <div className="add-file">
                      <i></i>
                      <input type="file" />
                    </div>
                    <p className="tip">支持jpg,jpeg,png格式图片上传</p>
                  </div>
                </li>
                <li>
                  <label>请输入企业名称：</label>
                  <div className="right">
                    <input type="text" placeholder="请输入企业名称" />
                  </div>
                </li>
                <li>
                  <label>请输入联系人：</label>
                  <div className="right">
                    <input type="text" placeholder="请输入联系人" />
                  </div>
                </li>
                  <li>
                    <label>请输入职位：</label>
                    <div className="right">
                      <input type="text" placeholder="请输入职位" />
                    </div>
                  </li>
                  <li>
                    <label>请选择所在城市：</label>
                  <Select defaultValue="lucy" style={{ width: 336, height: 50 }}>
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                  </li>
                  <li>
                    <label>请输入主营产品：</label>
                    <div className="right">
                      <textarea name="product" id="product" placeholder="请输入主营产品"></textarea>
                    </div>
                  </li>
                  <li>
                    <label>请输入公司简介：</label>
                    <div className="right">
                      <textarea name="introduction" id="introduction" placeholder="请输入公司简介"></textarea>
                    </div>
                  </li>
                  <li>
                    <label></label>
                    <div className="right">
                      <button className="submit">提交</button>
                      <button className="cancel">取消</button>
                    </div>
                  </li>
                </ul>
              </form>
          </div>
      </div>
    );
  }
}
