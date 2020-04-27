// 404 路由错误的页面
import React,{ useEffect } from "react";
import {withRouter} from 'react-router-dom';
import { Result,Button } from "antd";

function NotFound(props) {
  
  return (
    <div style={{paddingTop:'80px'}} >
      <Result
      status="404"
      title="没有找到该页面"
      extra={
        <Button type="primary" onClick={()=>props.history.replace('/')}>返回首页</Button>
      }
    />
    </div>
  );
}

export default withRouter(NotFound);
