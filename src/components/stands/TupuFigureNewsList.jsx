import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TupuFigureNewsList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
  }
 
  render () {
    let { ItemInfo, linkUrl } = this.props
    return (
      <li>
        <Link to={`${linkUrl}/${ItemInfo.graphId}`} className="figure">
          <img src={ItemInfo.imgPath} alt="" />
        </Link>
        <Link to={`${linkUrl}/${ItemInfo.graphId}`} className="figcaption">{ItemInfo.content}</Link>
        <p>所属行业：{ItemInfo.graphIndustryCategory}</p>
        <p>下载量：{ItemInfo.graphClick}</p>
      </li>
    );
  }
}
