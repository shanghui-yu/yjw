import React, { useState, useEffect, Fragment } from "react";
import { withRouter, NavLink, Link } from "react-router-dom";
import { Input } from "antd";
import mes from "./Mes";
import { spanceReg, b6De } from "utils/base";
import Cookies from "js-cookie";
import "sass/MyHeader.scss";
import "sass/search/standSearch.scss";
const { Search } = Input;

function MyHeader(props) {
  const [searchFlag, changeSearchFlag] = useState(false); //搜索按钮的loading
  const [showSearch, newShowSearch] = useState(true);
  const [user, getUser] = useState(null);

  //let routeName = props.location.pathname;
  let routeName = props.routeName;
  useEffect(() => {
    if (props.routeName) {
      if (routeName === "/home/index" || routeName.indexOf("/search") != -1) {
        //首页不需要搜索
        newShowSearch(false);
      } else {
        newShowSearch(true);
      }
    }
    // 用户中心的head不需要中间内容，传入这个字段进行判断是否是用户中心
    if (props.allNone) {
      newShowSearch(false);
    }

    //开始获取用户信息
    // let local=window.localStorage.getItem('userInfo');
    // let ses=window.sessionStorage.getItem('userInfo');
    // if(!Boolean(local) && !Boolean(ses)) return;
    // let obj= Boolean(local)? b6De(local) : b6De(ses);

    let cook = Cookies.get("useInfo");
    if (!cook) return;
    let obj = b6De(cook);
    getUser({ ...obj });
  }, [routeName]);
  
  function showTabs (name, Arr) {
    var result = Arr.some((item) => {
      return name.indexOf(item) > -1
    })
    return result
  }
  return (
    <div className="MyHeader-box">
      <div className="content-box">
        <div className="logo-box" onClick={() => props.history.push("/")}>
          <img
            src={require("imgs/utils/logo.png")}
            alt="雷霆应急网"
            title="雷霆应急网"
          />
          <h1>雷霆应急网</h1>
        </div>
        {!props.allNone && (
          <ul className="header-tabs">
            <li>
              <NavLink
                activeClassName="active"
                to={`/home/news/1`}
                //className={`${routeName === "/home/news/1" ? "active" : null}`}
              >
                应急新闻
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                to={`/Stands`}
                //className={`${routeName === "/Stands" ? "active" : null}`}
              >
                行业智酷
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                to={`/home/brandHall`}
                // className={`${
                //   routeName === "/home/brandHall" ? "active" : null
                // }`}
              >
                品牌展厅
              </NavLink>
            </li>
          </ul>
        )}
        {
          props.allNone==='stand' && (
            <ul className="header-tabs">
              {/* <Link to={`/home`}>首页</Link> */}
              <li><Link to={`/stands/chanpintupu`} className={`${showTabs(routeName, ['/stands/chanpintupu', '/stands/chanpintupuDetail']) ? 'active' : null}`}>产品图谱</Link></li>
              <li><Link to={`/stands/yanjiubaogao`} className={`${showTabs(routeName, ['/stands/yanjiubaogao', '/stands/yanjiubaogaoList', '/stands/yanjiubaogaoDetail']) ? 'active' : null}`}>研究报告</Link></li>
              <li><Link to={`/stands/weiketang`} className={`${showTabs(routeName, ['/stands/weiketang', '/stands/weiketangList', '/stands/weiketangDetail']) ? 'active' : null}`}>雷霆微课堂</Link></li>
            </ul>
          )
        }
        {props.allNone === 'stand' ?standsSerachDv():serachDv()}
        <div className="right-box">
          {user ? createLoginMenu() : createUnLoginMenu()}
        </div>
      </div>
    </div>
  );

  //生成登录之后的组件
  function createLoginMenu() {
    return (
      <div className="user-info">
        <a  className="avatar">
          <img src={user.avatar} />
        </a>
        <a className="nickname">
          {user.userName}
        </a>
        <ul className="slide-menu">
          <li>
            <Link to="/userInfo">个人中心</Link>
          </li>
          <li
            onClick={() => {
              if (user) {
                Cookies.remove("useInfo");
                getUser(null);
              } else {
                props.history.push("/user/register");
              }
            }}
          >
            退出登录
          </li>
        </ul>
      </div>
    );
  }

  //生成未登录的
  function createUnLoginMenu() {
    return (
      <Fragment>
        <span>
          <i onClick={() => props.history.push("/user/login")}>登录</i>
        </span>
        <span
          onClick={() => {
            props.history.push("/user/register");
          }}
        >
          <i>免费注册</i>
        </span>
      </Fragment>
    );
  }
  //搜索框
  function standsSerachDv () {
    let selected = '产品图谱'
    switch (routeName) {
      case '/stands/yanjiubaogao' || '/stands/yanjiubaogaoList' || '/stands/yanjiubaogaoDetail':
        selected = '研究报告'
        break;
      case '/stands/weiketang' || '/stands/weiketangList' || '/stands/weiketangDetail':
        selected = '雷霆微课堂'
        break;
    }
    if (routeName.indexOf('userInfo') < 0) {
      return (
        <form action="/search" method="GET" className="search-bar" id="search_bar">
          <input type="hidden" name="category" value="" />
          <div className="search-select">
            <div className="selected">{selected}</div>
            <ul className="options">
              <li data-value="">产品图谱</li>
              <li data-value="">研究报告</li>
              <li data-value="">雷霆微课堂</li>
            </ul>
          </div>
          <div className="search-input">
            <input type="search" placeholder="请输入关键字搜索" name="keyword" />
          </div>
          <div className="submit-button">
            <input type="submit" value="搜索" className="submit" />搜
          </div>
        </form>
      );
    }
  }

  //搜索框
  function serachDv() {
    return (
      <div className="search-box">
        <div className="seach">
          {showSearch && (
            <Search
              placeholder="请输入关键字搜索"
              onSearch={value => search(value)}
              enterButton
              allowClear={true}
              loading={searchFlag}
            />
          )}
        </div>
      </div>
    );
  }
  function search(value) {
    changeSearchFlag(true);
    if (!Boolean(value) || spanceReg.test(value)) {
      mes("warning", "请输入正确的标题");
      changeSearchFlag(false);
      return;
    } else {
      props.history.push({ pathname: `/home/search/${value}` });
      changeSearchFlag(false);
    }
  }
}

export default withRouter(MyHeader);
