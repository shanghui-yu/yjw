import React, { useEffect } from "react";
import { Carousel } from "antd";
import {Connect} from "hoc/Connect";
import { settings, urlReg } from "utils/base";
import defaultImg from "imgs/banner/default.png"; //默认图片
import * as Swiper from "Interface/commonSwiper";
import "sass/home/banner.scss";

interface PropsTypes {
  initHomeBanner: Function;
  homeBanner:Array<Swiper.ImgObj[]>;
}

function Banner(props:PropsTypes):JSX.Element {
  useEffect(() => {
    props.initHomeBanner();
  }, []);
  
  const {homeBanner} = props;

  return (
    <div className="banner-box">
      {!!homeBanner.length && swiperDv("left-box", homeBanner[0])}
      <div className="right-top">
        {!!homeBanner.length && swiperDv("", homeBanner[1])}
        {!!homeBanner.length && swiperDv("", homeBanner[2])}
      </div>
      <div className="right-buttom">
        {!!homeBanner.length && swiperDv("", homeBanner[3])}
        {!!homeBanner.length && swiperDv("", homeBanner[4])}
      </div>
    </div>
  );

  function swiperDv(styleName:string, arr:Swiper.ImgObj[], autoplaySpeed = 3000) {
    let set = {
      ...settings,
      autoplaySpeed
    };
    return (
      <div className={styleName}>
        <Carousel {...set}>
          {arr.map(({ picUrl, jumpLink, title }, index) => {
            return (
              <img
                src={picUrl || defaultImg}
                key={`${picUrl}_${index}`}
                alt={title}
                onClick={() => jump(jumpLink)}
              />
            );
          })}
        </Carousel>
      </div>
    );
  }
  function jump(url:string) {
    if (!Boolean(url)) return;
    let newUlr = urlReg(url);
    window.open(newUlr);
  }
}

export default Connect({
  name:'homeStore',
  need:['homeBanner'],
  func:['initHomeBanner']
},Banner)
