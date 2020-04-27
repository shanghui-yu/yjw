import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class TupuTrList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
  }
 
  render () {
    let { Detail } = this.props
    return (
      <tr>
        {
          Object.keys(Detail).map((item,index)=>{
            if (index===0) {
              return (
                <td width="429" key={`i_${index}`}>
                  <div className="figure-news">
                    <Link to={Detail[item].link} className="figure">
                      <img src={Detail[item].img} alt="" />
                    </Link>
                    <Link to={Detail[item].link} className="figcaption">{Detail[item].title}</Link>
                    <p>{Detail[item].content}</p>
                  </div>
                </td>
              )
            }else{
              return (<td key={`i_${index}`}>{Detail[item]}</td>)
            }
          })
        }
      </tr>
    );
  }
}
