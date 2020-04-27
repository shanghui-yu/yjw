import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TupuFigureNewsList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
  }
 
  render () {
    return (
      <li>
        <Link to={this.props.ItemInfo.link} className="figure">
          <img src={this.props.ItemInfo.img} alt="" />
        </Link>
        <Link to={this.props.ItemInfo.link} className="figcaption">{this.props.ItemInfo.content}</Link>
        <p>所属行业：{this.props.ItemInfo.tabs}</p>
        <p>下载量：{this.props.ItemInfo.total}</p>
      </li>
    );
  }
}
