/**
 *  首页各个模块的最外层盒子
 *  添加title
 */
import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import { settings, urlReg } from "../utils/base";
import "sass/ModulesWrap.scss";

class ModulesWrap extends React.Component<any,any> {
    render() {
      const { items,width,height } = (this as any).props;
      let swiperStyles: {} = {
        display: "block",
        width: width || 0,
        height: height || "250px",
        position: "relative",
        background: "#3a78ea",
        zIndex: "1"
      };
      if (Boolean(items.sectionTitle)) {
        //非广告占位图
        return (
          <div className="ModulesWrap-box">
            <h4>
              <i> {items.sectionTitle} </i>
              <Link to={`/home/news/${items.type}`} title="查看更多"></Link>
            </h4>
            { this.props.children }
          </div>
        );
      }
      //需要显示广告图
      return (
        <div style={swiperStyles}>
          <Carousel {...settings}>
            {items.adUrl.map((val: any, index: number) => {
              return (
                <a
                  key={`ad_swiper_${index}`}
                  href={urlReg(val.jumpLink)}
                  onClick={event => {
                    if (!Boolean(val.jumpLink)) event.preventDefault();
                  }}
                  target="_blank"
                >
                  <img
                    key={`ad_swiper_${index}`}
                    src={val.picUrl}
                    style={swiperStyles}
                  />
                </a>
              );
            })}
          </Carousel>
        </div>
      );
    }
}

export default ModulesWrap;
