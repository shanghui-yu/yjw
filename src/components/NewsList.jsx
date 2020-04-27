/**
 * 列表页
 * big true === 加粗
 * val 渲染数据来源
 */
import React from "react";
import HomeLink from "components/home/HomeLink";
import LazyImg from "components/LazyImg";
import MyEmpty from "./MyEmpty";
import { subContent } from 'utils/base';
import "sass/NewsList.scss";

let keys = "7,9,10"; // 7:技术 9:编辑视点 10:产品第一个需要大图

function NewsList(props) {
  return props.items.length ? (
    props.items.map((val, index) => {
      return (
        <HomeLink
          name="NewsList-box"
          id={ val.id }
          key={`NewsList_${index}`}
        >
          {props.tabsIndex &&
          keys.indexOf(props.tabsIndex) !== -1 &&
          index === 0 ? (
            <h3 className="NewsList-photo">
              <LazyImg imgUrl={val.imgUrl} />
              <s> { subContent(val.newsShortTitle,45) } </s>
            </h3>
          ) : (
            <React.Fragment>
              <h4
                //${props.tabsIndex && props.tabsIndex > 5? "two-height": ""} 如果需要显示两行
                className={`NewsList-content ${props.big && !index ? "needBig" : ""} `}
                title={val.newsShortTitle}
              >
                { val.newsShortTitle }
              </h4>
              <i className="NewsList-radius"></i>
            </React.Fragment>
          )}
        </HomeLink>
      );
    })
  ) : (
    <MyEmpty />
  );

}

export default NewsList;
