
// 
import React, {useEffect} from "react";
import {withRouter} from 'react-router-dom';

function SideFigureNews (props) {

  return (
    <div className="side-figure-news">
      <a href="/" className="figure" title="点击查看详情">
        <img src="https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png" alt="" />
      </a>
      <a href="/" title="点击查看详情" className="caption">科学家创造出可更好抵抗地震的可弯曲混凝土</a>
    </div>
  );
}

export default withRouter(SideFigureNews);

