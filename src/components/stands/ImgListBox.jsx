import React, { Component, Fragment, Suspense } from "react";
import { Link } from "react-router-dom";

export default class SwiperBox extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
  }
 
  render () {
    let { DataList, LinkUrl} = this.props
    return (
      <li>
        <Link to={`${LinkUrl}/${DataList.reportId}`} className="figure">
          <img src={DataList.reportPath} alt="" />
        </Link>
        <Link to={`${LinkUrl}/${DataList.reportId}`} className="caption">{DataList.reportTitle}</Link>
        <div className="footer">
          <span className="total">{DataList.reportClick}</span>
          <div className="tags">
            <span>{DataList.reportIndustryCategory}</span>
          </div>
        </div>
      </li>
    );
  }
}
