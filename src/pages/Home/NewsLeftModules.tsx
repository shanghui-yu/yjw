//首页左侧大模板
import React, { Component } from "react";
import ModulesWrap from "hoc/ModulesWrap";
import LeftThreeImg from "components/home/LeftThreeImg";
import LeftOneImg from "components/home/LeftOneImg";
import LeftRightList from "./LeftRightList";
import MyEmpty from "components/MyEmpty";
import * as HomeTypes from "Interface/homeTypes";
import "sass/home/LeftStyles.scss";

interface PropsTypes {
  items: HomeTypes.LeftRightNews;
}

class NewsLeftModules extends Component<PropsTypes, any> {
  constructor(props: PropsTypes) {
    super(props);
  }

  render() {
    const { items } = this.props;
    const { newsResult } = items;
    return (
      <ModulesWrap items={items} width='1200px' height='90px' >
        <div className="NewsLeftModules-box">
          {/* 左侧三张图或者一张图 */}
          <div className="NewsLeftModules-left-box">
            {items.model == 1 ? (
              <LeftThreeImg items={newsResult.leftResult} />
            ) : (
              <LeftOneImg items={newsResult.leftResult} />
            )}
          </div>
          {/* 右侧新闻列表 */}
          <div className="NewsLeftModules-right-box">
            { !Object.keys(newsResult).length || !newsResult.rightResult.length?  (
              <MyEmpty width="430px" height="400px" />
            ) : (
              newsResult.rightResult.map((val, index) => {
                return (
                  <LeftRightList items={val} key={`左侧右边的列表${index}`} />
                );
              })
            )}
          </div>
        </div>
      </ModulesWrap>
    );
  }
}

//export default ModulesWrap(NewsLeftModules);
export default NewsLeftModules;
