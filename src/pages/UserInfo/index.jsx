import React, { Component, Suspense } from "react";
import RouterViews from "router/RouterViews";
import { NavLink } from "react-router-dom";
import Loading from "components/Skeleton";
import { userInfoMenuItems } from "router/userInfoMenu";
import Cookies from "js-cookie";
import "sass/userInfoInside/Menu.scss";

const MyHeader = React.lazy(() => import("components/MyHeader"));
const MyFooter = React.lazy(() => import("pages/MyFooter"));

export default class RootHome extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let cook = Cookies.get("useInfo");
    if (!cook) this.props.history.replace('/user');
  }
  /**
   * @Author: yushanghui
   * @description: 判断路由参数是否有phone 如果有不需要左侧菜单
   * @param {type} 
   * @Date: 2020-04-22 14:46:54
   */
  checkPhone = (child,location)=>{
    if (location.pathname.indexOf('editPhone')>-1) {
      return (<RouterViews routes={child} />)
    }else{
      return (
        <div className="userInfo-menu-box">
          <div className="left-box">
            {userInfoMenuItems.map((values, index) => {
              return (
                <nav key={`wrap_${index}`}>
                  <h6 className="userInfo-navlink-style big">{values.title}</h6>
                  {!!child.length &&
                    child.map((val, inx) => {
                      if (val.title && val.key === values.key) {
                        return (
                          <NavLink
                            key={`nav_${inx}`}
                            className="userInfo-navlink-style"
                            activeClassName="active"
                            to={val.path}
                          >
                            {val.title}
                          </NavLink>
                        );
                      }
                    })}
                </nav>
              );
            })}
          </div>
          <div className="right-box">
            <RouterViews routes={child} />
          </div>
        </div>
      )
    }
  }
  render() {
    const { child, location } = this.props;

    return (
      <Suspense fallback={<Loading />}>
        <MyHeader allNone={true} />
        {this.checkPhone(child, location)}
        <MyFooter routeName={location.pathname} />
      </Suspense>
    );
  }
}
