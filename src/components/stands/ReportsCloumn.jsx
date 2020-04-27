import React, { Component, Fragment, Suspense } from "react";
import { Link } from "react-router-dom";

export default class ReportsCloumn extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
  }
 
  render () {
    let { DataList } = this.props
    return (
      <div className="reports-cloumn">
        <div className="header">{DataList.title}</div>
        <ul className="reports-cloumn-list">
          {DataList.datas.map((item,index)=>{
            return(
              <li key={`id_${index}`}>
                <Link to={"/"} className={item.img ? 'figure' :'hidden'}><img src={item.img} alt="" /></Link>
                <Link to={"/"} className="caption">{item.content}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}
