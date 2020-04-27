import React,{ Fragment } from 'react'
import LazyLoad from "react-lazyload";
import defaultImg from "imgs/utils/default.jpg";

export default function LazyImg (props) {
    return (
        <Fragment>
            <LazyLoad>
                <img src={ props.imgUrl? props.imgUrl : defaultImg} />
            </LazyLoad>
        </Fragment>
    )
}
