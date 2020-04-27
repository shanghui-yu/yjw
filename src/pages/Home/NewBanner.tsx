import React, { useEffect } from "react";
import {Connect} from "hoc/Connect";
interface PropsTypes {
  initHomeBanner: Function;
}
function NewBanner(props:PropsTypes):JSX.Element {
  useEffect(() => {
    props.initHomeBanner();
  }, [props]);
  return (
      <div className="home-focus">
        <a href="/" className="first">
          <img src="https://www.86yingji.com/static/media/default.b97b00c7.png" alt=""/>
        </a>
        <div className="flex clearfix">
          <a href="/">
            <img src="https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200116-02-rc-upload-1579155166134-13.png"
                 alt=""/>
          </a>
          <a href="/">
            <img src="https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200116-04-rc-upload-1579155166134-19.png"
                 alt=""/>
          </a>
          <a href="/">
            <img src="https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200116-03-rc-upload-1579155166134-16.png"
                 alt=""/>
          </a>
          <a href="/">
            <img src="https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200116-05-rc-upload-1579155166134-22.png"
                 alt=""/>
          </a>
        </div>
      </div>
);
}

export default Connect({
  name:'homeStore',
  need:['homeBanner'],
  func:['initHomeBanner']
},NewBanner)
