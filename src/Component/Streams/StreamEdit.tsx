import React from 'react';
import { connect } from 'react-redux';

import {fetchStream} from  '../../Actions';

class StreamEdit extends React.Component<Readonly< any >>{

    componentDidMount(){
        if( !this.props.stream ){
            this.props.fetchStream(this.props.match.params.id);
        }
    }

    render(){
        console.log(this.props.stream);
        if( !this.props.stream ){
            return (
                <div> Loading </div>
            )
        }
        else{
            return(
                <div> {this.props.stream.title} </div>
            )
        }
    }
}

const mapStateToProps = (state :any , ownProps : any) => {

    return { stream : state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream})(StreamEdit);