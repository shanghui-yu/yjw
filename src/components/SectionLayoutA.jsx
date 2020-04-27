// 404 路由错误的页面
import React, { useEffect } from "react";
import { withRouter, Link } from 'react-router-dom';
function SectionLayoutA (props) {
  let { firstModel, twoModel, threeModel } = props.lists
  return (
    <div className="section-layout-a clearfix">
      <div className="section-pictures-group">
        {!!firstModel.length && 
          firstModel.map((item,index)=>{
            return (
              <div className="big-figure" key={`id_${index}`}>
                <Link to={props.linkUrl + '/' + item.Id} >
                  <div className="figure">
                    <img src={item.imgPath} alt="" />
                  </div>
                  <div className="caption">{item.title}</div>
                </Link>
              </div>
            )
          })
        }
        <div className="flex-figures clearfix">
          {
            !!twoModel.length && 
              twoModel.map((item,index)=>{
                return (
                  <Link to="/" title="点击查看详情" key={`id_${index}`}>
                    <div className="figure">
                      <img src={item.imgPath} alt="" />
                    </div>
                    <div className="caption">{item.title}</div>
                  </Link>
                )
              })
          }
        </div>
      </div>
      <div className="section-lists-group">
        {
          !!threeModel.length && threeModel.map((item, index)=>{
            return (
              <ul className="news-list" key={`id_${index}`}>
                {!!item.length&&item.map((newItem,inx)=>{
                  return (
                    <li key={`new_${inx}`}>
                      <Link to={props.linkUrl + '/' + newItem.Id}>{newItem.title}</Link>
                    </li>
                  )
                })}
              </ul>
            )
          })
        }
      </div>
    </div>

  );
}

export default withRouter(SectionLayoutA);

