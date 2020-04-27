import React, { PureComponent } from "react";
import TitleNewsList from 'components/TitleNewsList';

class NewsRightModules extends PureComponent {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className="NewsRightModules">
            <TitleNewsList  items={ this.props.items } />
        </div>
    )
  }
}

export default NewsRightModules;
