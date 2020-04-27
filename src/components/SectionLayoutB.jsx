// 404 路由错误的页面
import React, { useEffect } from "react";
import { withRouter, Link } from 'react-router-dom';

function SectionLayoutA (props) {
  let { firstModel, threeModel } = props.lists
  return (
    <div className="section-layout-b clearfix">
      {
        !!firstModel.length && firstModel.map((item, index) => {
          return (
            <div className="section-pictures-group" key={`id_${index}`}>
              <Link to={props.linkUrl + '/' + item.graphId} className="figure">
                <img src={item.imgPath} alt="" />
              </Link>
              <Link to={props.linkUrl + '/' + item.graphId} title="点击查看详情" className="caption">{item.graphTitle}</Link>
              <div className="description">
                <div className="date">
                  <span className="author">{item.author}</span>{item.createTime}</div>
                <p>{item.content}</p>
              </div>
            </div>
          )
        })
      }
      
        <div className="section-lists-group">
        {
          !!threeModel.length && threeModel.map((item, index) => {
            return (
              <ul className="news-list" key={`id_${index}`}>
                {!!item.length && item.map((newItem, inx) => {
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

