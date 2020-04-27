import React, { Component, Fragment, Suspense } from "react";
import { Link } from "react-router-dom";

export default class SwiperBox extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
  }
 
  render () {
    return (
      <li>
        <Link to={this.props.DataList.path} className="figure">
          <img src={this.props.DataList.img} alt="" />
        </Link>
        <Link to={this.props.DataList.path} className="caption">{this.props.DataList.title}</Link>
        <div className="footer">
          <span className="total">{this.props.DataList.total}</span>
          <div className="tags">
            <span>卫生防疫</span>
            <span>救援运载</span>
            <span>动力燃料</span>
          </div>
        </div>
      </li>
    );
  }
}
