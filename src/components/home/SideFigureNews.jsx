
// 
import React, {useEffect} from "react";
import { withRouter, Link} from 'react-router-dom';

function SideFigureNews (props) {
  let { List} = props
  return (
    <div className="side-figure-news">
      <Link to="/stands/weiketang" className="figure" title="点击查看详情">
        <img src={List.imgPath} alt="" />
      </Link>
      <Link to="/stands/weiketang" title="点击查看详情" className="caption">{List.title}</Link>
    </div>
  );
}

export default withRouter(SideFigureNews);

