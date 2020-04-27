// 404 路由错误的页面
import React, { useEffect } from "react";
import { withRouter } from 'react-router-dom';

function NewListTwo (props) {

  return (
    <ul className="news-list">
        <li>
          <a href="/article">韩系插电混动靠谱吗让起亚K5 PHEV告诉您！</a>
        </li>
      <li>
        <a href="/article">韩系插电混动靠谱吗让起亚K5 PHEV告诉您！</a>
      </li>
      <li>
        <a href="/article">韩系插电混动靠谱吗让起亚K5 PHEV告诉您！</a>
      </li>
    </ul>
  );
}

export default withRouter(NewListTwo);

