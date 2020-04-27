import React, { Component, Fragment, Suspense } from "react";
import { Link } from "react-router-dom";
import Cropper from 'react-cropper' // 引入Cropper
import 'cropperjs/dist/cropper.css' // 引入Cropper对应的css

const cropper = React.createRef(null);
export default class EditPhoto extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    setTimeout(() => {
      this.toBase64('https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200306-115-rc-upload-1583460991685-89.png')
    }, 500);
   
  }
  showPassworkMask = () => { // 学习挣钱，调用父组件方法
    this.props.showMask();
  }
  toBase64 =(url)=> {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 300;
    canvas.height = 300;
    // ctx.drawImage(url, 0, 0, 300, 300);
    console.log(ctx);
    // const base64 = canvas.toDataURL();
    // console.log(base64,123);
  }
  render () {
    return (
      <div className="alert-plugin edit-photo visible">
        <div className="mask"></div>
        <div className="alert">
          <div className="header">
            <div className="close" onClick={this.showPassworkMask}>×</div>
            设置头像
          </div>
          <div className="main cropper">
            <div className="cropper-box">
              <Cropper
                style={{ width: "300px", height: "300px" ,display:'inline-block'}}
                aspectRatio={1}
                preview=".cropper-preview"
                guides={false}
                src={ require ("imgs/popUp.jpg") }
                ref={cropper => { this.cropper = cropper }}
              />
              <div className="cropper-preview" ></div>
            </div>
            
          </div>
          <div className="footer cropper-footer">
            <button className="submit">确认修改</button>
            <button className="cancel">取消</button>
          </div>
        </div>
      </div>
    );
  }
}
