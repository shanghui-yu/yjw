//页面加载的时候，骨架屏
import React from "react";
import { Skeleton } from "antd";

function LoadingSkeleton(props) {
  return (
      <div style={{
          width:'1200px',
          margin:'0 auto',
      }}>
          <Skeleton paragraph={{ rows: 30 }} />
      </div>
  );
}

export default LoadingSkeleton;