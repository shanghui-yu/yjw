import React from 'react';
import { Empty } from 'antd';

function MyEmpty (props) {
    return(
        <div 
        style={{
          width:`${props.width || '200px' }`,
          height:`${props.height || '200px' }`
        }} >
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}  description='暂无数据' /> 
      </div>
    )
}

export default MyEmpty;