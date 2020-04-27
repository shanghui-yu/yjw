// 404 路由错误的页面
import React, { useEffect } from "react";
import { withRouter, Link } from 'react-router-dom';

function NewListTwo (props) {
  let { Lists} = props
  return (
    <ul className="news-list">
      {
        !!Lists.length && Lists.map((item, index) => {
          if (index>0) {
            return(
              <li key={`id_${index}`} key={`id_${index}`}>
                <Link to=''>{item.title}</Link>
              </li>
            )
          }
        })
      }
    </ul>
  );
}

export default withRouter(NewListTwo);

