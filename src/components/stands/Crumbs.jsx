import React, { Component} from "react";
import { Link } from "react-router-dom";
import "sass/stands/crumbs.scss";

export default class Crumbs extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
  }
  render () {
    let { crumbsData} = this.props
    
    return (
      <div className="crumbs">
        当前位置：<Link to='/stands/chanpintupu'> 行业智库 &gt; </Link>
        {
          crumbsData.map((item, inde) => {
            if (inde === crumbsData.length - 1) {
              return (<span key={`id_${inde}`}>{item.value}</span>)
            }else{
              return (<Link key={`id_${inde}`} to={item.path}>{item.value} &gt; </Link>)
            }
          })
        }
      </div>
    );
  }
}
