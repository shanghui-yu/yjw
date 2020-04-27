//左侧文章列表 显示一个的
import React from "react";
import MyEmpty from "components/MyEmpty";
import LazyImg from "components/LazyImg";
import HomeLink from "components/home/HomeLink";
import { subContent } from "utils/base";
import "sass/home/LeftStyles.scss";

function LeftOneImg(props) {
  const { items } = props;
  return (
    <HomeLink name="LeftOneImg-box" title="点击查看详情" id={items[0].id}>
      {items.length ? (
        <React.Fragment>
          <div className="LeftOneImg-img-box">
            <LazyImg imgUrl={items[0].imgUrl} />
          </div>
          <h4 className="LeftOneImg-title">{items[0].newsShortTitle || ""}</h4>
          <h5 className="LeftOneImg-subTitle">
            <i> {items[0].publishTime || ""} </i>
            <i> {items[0].author || ""} </i>
          </h5>
          <h6 className="LeftOneImg-content">
            {subContent(items[0].newsIntroduction, 150)}
          </h6>
        </React.Fragment>
      ) : (
        <MyEmpty />
      )}
    </HomeLink>
  );

  function jump(event) {
    if (!Boolean(items[0].id) || items[0].id === -1) event.preventDefault();
    //props.history.push(`/detail/${items[0].id}`);
  }
}

export default LeftOneImg;
