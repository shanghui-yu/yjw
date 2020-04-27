import React, { useState, useEffect } from "react";
import { appEwm, wechatEwm } from "utils/base";
import "sass/MyFooter.scss";

function MyFooter(props) {
  const [newYear, changeNewYear] = useState(false);
  let routeName = props.routeName;
  useEffect(() => {
    if (routeName === "/") {
      //首页需要新年颜色
      changeNewYear(true);
    } else {
      changeNewYear(false);
    }
  }, [routeName]);
  return (
    <div className={`MyFooter-box ${newYear ? "newYear" : ""}`}>
      <div className="MyFooter-content">
        <h4>雷霆应急网简介：</h4>
        <h5>
          雷霆应急网（86yingji.com）是专业的应急行业门户网，专注于提供应急安全行业最新资讯和先进技术，提供专业精准的品牌推广、产品大数据、解决方案、专家顾问、新闻资讯、软文服务、专访报道、专题制作等全方位服务，为全球业内人士提供及时、海量、专业、权威的行业资讯、市场分析、技术交流、产品展示和服务平台，覆盖应急行业整个产业链，精准洞察行业发展趋势。雷霆应急网汇聚了国内外众多应急安全专家、应急安全事件案例分析、针对各类应急安全事件的解决方案、前沿的应急安全技术及产品等资源。全面贯彻党中央国务院、省委省政府、市委市政府关于加强应急管理的工作要求，落实防灾减灾救灾工作。整合超过20000个应急行业供应商，逾100000个应急行业产品，并与500多家全球知名企业达成深度战略合作，与全国多个省市政府机构达成合作，将雷霆应急网的专业服务和大数据服务推向全国。
        </h5>
        <div className="app-down-box">
          {/* <span>
            <img src={appEwm} />
            <h6>安卓版APP下载</h6>
          </span> */}
          <span>
            <img src={wechatEwm} />
            <h6>雷霆应急网公众号</h6>
          </span>
        </div>
      </div>
      <div className="MyFooter-logo">
        <img
          src={require("imgs/utils/logoWhite.png")}
          alt="雷霆应急网"
          title="雷霆应急网"
        />
        <h6>
          <i>Copyright©深圳雷霆应急科技有限公司</i>
          <i>增值电信业务经营许可证：粤ICP备19019379号-3</i>
          <i>粤公网安备 44030402003062号</i>
        </h6>
      </div>
    </div>
  );
}

export default MyFooter;
