/**
 * 列表页，如果没数据，显示空状态
 * !!!必传 @params { Object } empty 
 * @params { Array } empty.data 
 * @params { string } empty.width default 200
 * @params { string } empty.height default 200
 */
import React from "react";
import { Empty } from "antd";
import { getName } from "../utils/base";
import 'sass/NeedEmpty.scss';

export default function NeedEmpty(ComponentClass) {
  return class extends ComponentClass {
    static displayName = `HOC(${getName(ComponentClass)})`;
    render() {
      const { empty } = this.state ;
      if( !empty || !empty.data || !empty.data instanceof Array || !empty.data.length ){
        return ( 
          <div 
            id='NeedEmpty'
            style={{
              width:`${empty.width || '200px' }`,
              height:`${empty.height || '200px' }`
            }} >
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}  description='暂无数据' /> 
          </div>
        )
      }
      return super.render();
    }
  };
}
