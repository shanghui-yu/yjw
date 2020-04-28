import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
export default class TupuTrList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
  }
 
  render () {
    let { Detail, linkUrl } = this.props
    return (
      <tr>
        <td width="429">
          <div className="figure-news">
            <Link to={`${linkUrl}/${Detail.graphId}`} className="figure">
              <img src={Detail.graphPath} alt="" />
            </Link>
            <Link to={`${linkUrl}/${Detail.graphId}`} className="figcaption">{Detail.graphTitle}</Link>
            <p>{Detail.content}</p>
          </div>
        </td>
        <td>{Detail.graphIndustryCategory}</td>
        <td>{moment(Detail.createTime).format('YYYY/MM/DD')}</td>
        <td>{Detail.graphType}</td>
        <td>{Detail.graphClick}</td>
      </tr>
    );
  }
}
