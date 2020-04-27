// 404 路由错误的页面
import React, { useEffect } from "react";
import { withRouter } from 'react-router-dom';
import NewListTwo from './newListTwo'
function SectionLayoutA (props) {

  return (
    <div className="section-layout-a clearfix">
      <div className="section-pictures-group">
        <div className="big-figure">
          <a href="/" title="点击查看详情">
            <div className="figure">
              <img src="https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200403-728-rc-upload-1585881220726-5.png" alt="" />
            </div>
            <div className="caption">清华团队研发进展：新冠肺炎疫苗5月底可动物试验</div>
          </a>
         </div>
        <div className="flex-figures clearfix">
            <a href="/" title="点击查看详情">
              <div className="figure">
                <img src="https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200403-726-rc-upload-1585874197208-45.png" alt="" />
              </div>
                <div className="caption">美国新冠肺炎死亡病例日增1169例 系单日最大增幅</div>
            </a>
            <a href="/" title="点击查看详情">
              <div className="figure">
                <img src="https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200403-726-rc-upload-1585874197208-45.png" alt="" />
              </div>
              <div className="caption">美国新冠肺炎死亡病例日增1169例 系单日最大增幅</div>
            </a>
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

