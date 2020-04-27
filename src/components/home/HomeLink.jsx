//首页的Link标签统一进行封装

import React from "react";
import { Link } from "react-router-dom";

export default function HomeLink(props) {
  return (
    <Link
      className={props.name || ''}
      title={props.title}
      target="_blank"
      to={ `/home/detail/${props.id}` }
      onClick={event => {
        if(!props.id) event.preventDefault();
      }}
    >
      {props.children}
    </Link>
  );
}
