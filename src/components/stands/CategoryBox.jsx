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
    let { Content } = this.props
    return (
      <div className="category-box">
        {Content.length && Content.map((item,index)=>{
          return(
          <dl key={`id_${index}`}>
              {item.label ?<dt>{item.label}：</dt>:null}
            <dd>
              {item.tabs.map((itemTwo,inx)=>{
                if (itemTwo.path){
                  return (<Link to={itemTwo.path} key={`id_${inx}`}>{itemTwo.name}</Link>)
                }else{
                  return (<Link>{itemTwo.name}</Link>) 
                }
              })}
            </dd>
          </dl>
          )
        })}
      </div>
    );
  }
}
