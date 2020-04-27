//左侧大图列表 显示三个的
import React from "react";
import HomeLink from "components/home/HomeLink";
import LazyImg from "components/LazyImg";
import "sass/home/LeftStyles.scss";

function LeftThreeImg(props) {
  const { items } = props;

  return (
    <div className="LeftThreeImg-box">
      {items.length &&
        items.map((val, index) => {
          return (
            <HomeLink
              key={`左侧三张图_${index}`}
              title="点击查看详情"
              id={val.id}
            >
              <LazyImg imgUrl={val.imgUrl} />
              <h4> {val.newsShortTitle ? val.newsShortTitle : ""} </h4>
            </HomeLink>
          );
        })}
    </div>
  );
}

export default LeftThreeImg;
