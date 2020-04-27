// 404 路由错误的页面
import React, { useEffect } from "react";
import { withRouter } from 'react-router-dom';
import NewListTwo from './newListTwo'
function SectionLayoutA (props) {

  return (
    <div className="section-layout-b clearfix">
      <div className="section-pictures-group">
        <a href="/" title="点击查看详情" className="figure">
          <img src="https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200402-114-rc-upload-1585793798104-87.png" alt="" />
        </a>
        <a href="/" title="点击查看详情" className="caption">
           泸山山火复燃威胁城区 四川消防救援支队彻夜阻击火势
        </a>
        <div className="description">
          <div className="date">
            <span className="author">超级无敌美少女</span>
            2020-04-02 11:37:42
          </div>
          <p>4月2日，北京青年报记者从四川省消防救援总队，4月1日晚20时许，泸山新产生3公里的火线并向山下蔓延，火线绵延数公里，紧邻周边建筑。四川省消防救援总队组织11个消防救援支队、500余名指战员、91辆消防车在20余处重点场所分点布控，阻击山火。</p>
        </div>
      </div>
        <div className="section-lists-group">
          <NewListTwo />
          <NewListTwo />
          <NewListTwo />
        </div>
    </div>
  );
}

export default withRouter(SectionLayoutA);

