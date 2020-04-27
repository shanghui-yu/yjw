import React, { Component, Suspense } from "react";
import RouterViews from 'router/RouterViews';
import RouterLoading from "hoc/RouterLoading";
import JParticles from "jparticles";
import "sass/user/user.scss";


export default class User extends Component {
  constructor(props) {
    super(props);
    this.anmationObj = null;
  }
  componentDidMount() {
    this.anmationObj = new JParticles.particle("#userBgBox", {
      color: "#ccc",
      lineShape: "cube",
      range: 1000,
      proximity: 70,
      maxSpeed: 0.2,
      lineShape: "cube",
      // 开启视差效果
      parallax: true
    });
  }

  componentWillUnmount() {
    this.anmationObj.onDestroy();
  }

  render() {
    const { child } = this.props;
    return (
      <div className="User-box">
        <div id="userBgBox"></div>
        <Suspense fallback={<RouterLoading />}>
          <div
            className="User-logo"
            title="返回首页"
            onClick={() => this.props.history.push("/")}
          ></div>

          <div className="User-content-box">
            <RouterViews  routes={child} />
          </div>
        </Suspense>
      </div>
    );
  }
}
