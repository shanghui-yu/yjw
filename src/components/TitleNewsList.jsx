/**
 * 列表  有title的
 * tabsIndex非必传项，有些列表的样式不需要，通过这个参数来识修改对应的样式
 * items列表页的数据源
 * items的每一项必须有sectionTitle字段，空字符串是显示广告图
 */
import React, { Component } from "react";
import NewsList from "./NewsList";
import ModulesWrap from "hoc/ModulesWrap";

class TitleNewsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ModulesWrap items={this.props.items} width='300px' height='250px' >
        <div className="TitleNewsList-box">
          <NewsList
            tabsIndex={this.props.items.tabsIndex}
            items={this.props.items.list}
          />
        </div>
      </ModulesWrap>
    );
  }
}

export default TitleNewsList;
