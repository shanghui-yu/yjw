//路由跳转的菊花图
import React from 'react';
import { Spin } from 'antd';

export default function RouterLoading(){
    return (
        <div style={{
            position:'absolute',
            width:'100%',
            height:'100%',
            paddingTop:'100px',
            textAlign:'center',
        }} >
            <Spin tip="加载中..."  size='large' />
        </div>
    )
}