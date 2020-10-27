import React from 'react';
import {connect} from 'react-redux';

import Modal from '../Modal';
import history from '../../History';
import {fetchStream, deleteStream} from '../../Actions';


class StreamDelete extends React.Component<Readonly< any >> {

    actionButtons = (
        <>
            <button className="ui button negative"> Delete </button>
            <button className="ui button"> Cancel </button>
        </>
    )

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
                <div> 
                    StreamDelete
                    <Modal title={`Delete Stream ${this.props.stream.title}`} content="Are you sure you want to delete this Stream ?" actionButtons={this.actionButtons} onDismiss={()=>{ history.push('/') }} bubble={false}/>
                </div>
            )
        }
    }
    
}

const mapStateToProps = (state :any , ownProps : any) => {
    return { 
        stream : state.streams[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps, {fetchStream, deleteStream} )(StreamDelete);