import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import mes from "components/Mes";
import { spanceReg, b6De } from "utils/base";
import Cookies from "js-cookie";
function MyHeader (props) {
  const [changeSearchFlag] = useState(false); //搜索按钮的loading
  const [showSearch, newShowSearch] = useState(true);
  const [user, getUser] = useState(null);
  let routeName = props.routeName;
  useEffect(() => {
    if (routeName === "/home/index" || routeName.indexOf('/search') != -1) {
      //首页不需要搜索
      newShowSearch(false);
    } else {
      newShowSearch(true);
    }

    let cook = Cookies.get("useInfo");
    if (!cook) return;
    let obj = b6De(cook);
    getUser({ ...obj });
  }, [routeName]);

  /**
   * @description:  根据路由显示对应的选中状态
   * @param {name：路由名} 是路由名字
   * @param {Arr：数组} 是判断的路由字符串，
   * @return: 返回Boolean 
   */
  function showTabs(name,Arr){
    var result = Arr.some((item)=>{
      return name.indexOf(item)>-1
    })
    return result
  }
  // 登录状态判断
  function showLogin(){
    if (user) {
      return (
        <div className="user-info">
          <Link to="/userInfo" className="avatar">
            <img src="https://wx.qlogo.cn/mmopen/NKkTUbVKQ0vpib52elyzpeNYopDmNdNowvjczrgpcPrDxIQcqOf1sogPOev95haibO4IfD6qmiaHXLT8ic40X4syicAwPSzKVNZkic/64" />
          </Link>
          <Link to="/userInfo" className="nickname">傲娇的直男</Link>
          <ul className="slide-menu">
            <li><Link to="/userInfo">个人中心</Link></li>
            <li onClick={() => {
              if (user) {
                Cookies.remove("useInfo");
                getUser(null);
              } else {
                props.history.push("/user/register");
              }
            }}>退出登录</li>
          </ul>
        </div>
      )
    }else{
      return (
        <div className="links">
          <Link to="/user/login">登录</Link>|<Link to="/user/register">免费注册</Link>
        </div>
      )
    }
  }

/**
 * @description: 判断是不是个人中心模块 如果是隐藏路由和搜索
 */  
  function checkUser(){
    if (routeName.indexOf('userInfo') < 0) {
      return(
        <div className="navs">
          {/* <Link to={`/home`}>首页</Link> */}
          <Link to={`/stands/chanpintupu`} className={`${showTabs(routeName, ['/stands/chanpintupu', '/stands/chanpintupuDetail']) ? 'current' : null}`}>产品图谱</Link>
          <Link to={`/stands/yanjiubaogao`} className={`${showTabs(routeName, ['/stands/yanjiubaogao', '/stands/yanjiubaogaoList', '/stands/yanjiubaogaoDetail']) ? 'current' : null}`}>研究报告</Link>
          <Link to={`/stands/weiketang`} className={`${showTabs(routeName, ['/stands/weiketang', '/stands/weiketangList', '/stands/weiketangDetail']) ? 'current' : null}`}>雷霆微课堂</Link>
        </div>
      )
    }
  }

  return (
    <div className='site-header'>
      <div className="wrapper clearfix">
        <div className="sign-info">{showLogin()}</div>
        <div className="space clearfix">
          <Link to={`/home`}><h1 className="logo"> 雷霆应急网 www.86yingji.com</h1></Link>
          {checkUser()}
          {serachDv()}
        </div>
      </div>
    </div>
  );

  //搜索框
  function serachDv () {
    let selected ='产品图谱'
    switch (routeName) {
      case '/stands/yanjiubaogao' || '/stands/yanjiubaogaoList' || '/stands/yanjiubaogaoDetail':
        selected ='研究报告'
        break;
      case '/stands/weiketang' || '/stands/weiketangList' || '/stands/weiketangDetail':
        selected = '雷霆微课堂'
        break;
    }
    if (routeName.indexOf('userInfo') < 0) {
      return (
        <form action="/search"  method="GET" className="search-bar" id="search_bar">
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
  function search (value) {
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
