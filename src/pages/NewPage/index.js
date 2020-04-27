import React from 'react'
import './index.scss'
import { Menu, Dropdown } from 'antd'
import mes from "../../components/Mes";

const { SubMenu } = Menu;

const menu = (
    <Menu>
      <SubMenu title="监测预警">
        <Menu.Item>气象监测</Menu.Item>
        <Menu.Item>地震监测</Menu.Item>
        <Menu.Item>地质灾害监测</Menu.Item>
        <Menu.Item>水文监测</Menu.Item>
        <Menu.Item>环境监测</Menu.Item>
        <Menu.Item>疫病监测</Menu.Item>
        <Menu.Item>观察测量</Menu.Item>
        <Menu.Item>社会安全监测</Menu.Item>
      </SubMenu>
      <SubMenu title="风险防控与安全生产">
        <Menu.Item>重要设施防护系统</Menu.Item>
        <Menu.Item>安全生产防控系统</Menu.Item>
        <Menu.Item>化学与放射防护</Menu.Item>
        <Menu.Item>高空坠落防护</Menu.Item>
        <Menu.Item>特种劳动防护</Menu.Item>
        <Menu.Item>通用防护</Menu.Item>
      </SubMenu>
      <SubMenu title="应急通讯与指挥">
        <Menu.Item>应急管理与指挥调度</Menu.Item>
        <Menu.Item>应急网络通信</Menu.Item>
        <Menu.Item>应急有线通信</Menu.Item>
        <Menu.Item>应急无线通信</Menu.Item>
        <Menu.Item>应急广播电视通信</Menu.Item>
      </SubMenu>
      <SubMenu title="特种应急救援保障装备">
        <Menu.Item>应急动力</Menu.Item>
        <Menu.Item>燃料供应</Menu.Item>
        <Menu.Item>通信抢修</Menu.Item>
        <Menu.Item>电力抢修</Menu.Item>
        <Menu.Item>岩土工程施工</Menu.Item>
        <Menu.Item>公路桥梁抢修</Menu.Item>
        <Menu.Item>应急桥梁搭建</Menu.Item>
      </SubMenu>
      <SubMenu title="智能无人应急救援装备">
        <Menu.Item>事故现场处置</Menu.Item>
        <Menu.Item>无人生命搜救</Menu.Item>
      </SubMenu>
      <SubMenu title="紧急医疗救援">
        <Menu.Item>伤员固定与转运</Menu.Item>
        <Menu.Item>院前急救</Menu.Item>
        <Menu.Item>药品疫苗</Menu.Item>
        <Menu.Item>防疫消杀</Menu.Item>
        <Menu.Item>卫生保障</Menu.Item>
      </SubMenu>
      <SubMenu title="消防救援装备">
        <Menu.Item>消防防护装备</Menu.Item>
        <Menu.Item>城市消防装备</Menu.Item>
        <Menu.Item>森林消防装备</Menu.Item>
      </SubMenu>
      <SubMenu title="水域救援装备">
        <Menu.Item>个人水域防护</Menu.Item>
        <Menu.Item>水下营救</Menu.Item>
        <Menu.Item>水上救捞</Menu.Item>
        <Menu.Item>溢油污染</Menu.Item>
      </SubMenu>
      <SubMenu title="危化品处置装备">
        <Menu.Item>化学防护</Menu.Item>
        <Menu.Item>危化品堵漏</Menu.Item>
        <Menu.Item>污染物收集</Menu.Item>
        <Menu.Item>污染物处理</Menu.Item>
        <Menu.Item>危化品洗消</Menu.Item>
      </SubMenu>
      <SubMenu title="防汛抗旱装备">
        <Menu.Item>防水防雨作业</Menu.Item>
        <Menu.Item>防洪排涝作业</Menu.Item>
        <Menu.Item>抗旱打井浇灌</Menu.Item>
        <Menu.Item>水工工程作业</Menu.Item>
        <Menu.Item>临时住宿</Menu.Item>
        <Menu.Item>保暖衣物</Menu.Item>
        <Menu.Item>饮食保障</Menu.Item>
      </SubMenu>
      <SubMenu title="应急专业技术服务">
        <Menu.Item>自然灾害防治技术服务</Menu.Item>
        <Menu.Item>消防技术服务</Menu.Item>
        <Menu.Item>安全生产技术服务</Menu.Item>
        <Menu.Item>应急测绘技术服务</Menu.Item>
        <Menu.Item>风险评估服务</Menu.Item>
        <Menu.Item>隐患排查服务</Menu.Item>
        <Menu.Item>检验检测认证服务</Menu.Item>
      </SubMenu>
      <SubMenu title="应急产业服务">
        <Menu.Item>应急物流</Menu.Item>
        <Menu.Item>巨灾保险</Menu.Item>
        <Menu.Item>供应链金融</Menu.Item>
      </SubMenu>
    </Menu>
  );

const fLi = ['产品发布','产品管理','视频上传']
const sLi = ['发布需求','发布招标投','我的关注']

export default function NewPage () {
    return (
        <div className="NewPage-box">
            <div className="Wrap">
                <div className="imgWrap">
                    <Dropdown overlay={menu}>
                        <div className="categoryBtn">
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                行业分类
                            </a>
                        </div>
                    </Dropdown>
                    <img src={require('./a.jpg')} />
                    <div className="right-box">
                        <div className="listWrap">
                            <div className="list">
                                <div className="title">供货方</div>
                                <ul>
                                   {
                                       fLi.map((item,index) => {
                                           return <li key={index} onClick={() => {mes("warning", "功能暂未开放，敬请期待......");}}> {item} </li>
                                       })
                                   }
                                </ul>
                            </div>
                            <div className="list">
                                <div  className="title">需求方</div>
                                <ul>
                                    {
                                       sLi.map((item,index) => {
                                           return <li key={index} onClick={() => {mes("warning", "功能暂未开放，敬请期待......");}}> {item} </li>
                                       })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 