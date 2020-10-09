import React from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from '../../Actions';

class StreamList extends React.Component<Readonly< any >>{
    
    componentDidMount(){
        this.props.fetchStreams();
    }

    render(){
    return(
        <div> StreamList </div>
    )}
}

export default connect(null, {fetchStreams})(StreamList);