import React, { Component} from "react";
import { Link } from "react-router-dom";
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import 'sass/stands/channel-swiper.scss';
export default class CategoryBox extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
  }
  render () {
    const params = {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      loop: true,
      pagination: {
        el: '.pagination',
        type: 'bullets',
        clickable: true
      },
      spaceBetween: 30
    }
    return (
      
      <div className="channel-swiper">
        <Swiper {...params}>
          <div className="swiper-slide">
            <Link to={'/'}>
              <img src="https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200402-%E5%9B%BEC_1-rc-upload-1585790419876-38.png" alt="" />
            </Link>
          </div>
          <div className="swiper-slide">
            <Link to={'/'}>
              <img src="https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200402-%E5%9B%BEC_1-rc-upload-1585790419876-38.png" alt="" />
            </Link>
          </div>
          <div className="swiper-slide">
            <Link to={'/'}>
              <img src="https://yjw-image.oss-cn-shenzhen.aliyuncs.com/yjwSit/20200402-%E5%9B%BEC_1-rc-upload-1585790419876-38.png" alt="" />
            </Link>
          </div>
        </Swiper>
    </div>
    );
  }
}
