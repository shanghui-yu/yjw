import React, { Component, Fragment, Suspense } from "react";
import { Link } from "react-router-dom";
import "sass/stands/category-box.scss";

export default class CategoryBox extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
  }
 
  render () {
    let { Content ,LinkUrl} = this.props
    return (
      <div className="category-box">
        <dl>
          <dt>行业分类：</dt>
          <dd>
            {!!Content.length&&Content.map((itemTwo, inx) => {
              if (LinkUrl) {
                return (<Link to={`${LinkUrl}/${itemTwo.categoryName}`} key={`id_${inx}`}>{itemTwo.categoryName}</Link>)
              } else {
                return (<Link to="" key={`id_${inx}`}>{itemTwo.categoryName}</Link>)
              }
            })}
          </dd>
        </dl>
      </div>
    );
  }
}
