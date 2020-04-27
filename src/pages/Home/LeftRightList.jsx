import React from 'react';
import NewsList from "components/NewsList";
import 'sass/home/LeftRightList.scss';

class LeftRightList extends React.Component {
    render(){
        return(
            <div className='LeftRightList-box'>
                <NewsList items={ this.props.items } big={true} />
            </div>
        )
    }
}

export default LeftRightList;