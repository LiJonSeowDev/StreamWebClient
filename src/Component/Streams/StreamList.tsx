import React from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from '../../Actions';
import { Link } from 'react-router-dom';

import streams from '../../api/streams';

class StreamList extends React.Component<Readonly< any >>{
    
    componentDidMount(){
        this.props.fetchStreams();
    }

    renderCreate(){
        if ( this.props.isSignedIn ) {
            return (
                <div style={{textAlign : "right"}}>
                    <Link to={`/streams/new`}>
                        <button className="ui button primary"> Create Stream </button>
                    </Link>
                </div>
            )
        }
    }

    renderStreamControls( stream: Stream ){
        if( stream.userID === this.props.currentUserID ){
            return (
                <div className="right floated content">
                    <div>
                    <Link to={`/streams/edit/${stream.id}`}><button className="ui button primary"> EDIT </button></Link>
                    <button className="ui button negative primary"> DELETE </button>
                    </div>
                </div>
            )
        }
    }

    renderList(){
        return (
            this.props.streams.map(
                (stream : Stream) => {
                    return (
                        <div className="item" key={stream.id}>
                            {this.renderStreamControls(stream)}
                            <i className="large middle aligned icon camera" />
                            <div className="content">
                                {stream.title}
                                <div className="description">{stream.description}</div>
                            </div>
                        </div>
                    )
                }
                
            )
        )
    }

    render(){
        return(
            
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        )
    }
}


const mapStateToProps = ( {streams , googAuth} : {streams : StreamDict<Stream> , googAuth : any}) => {
    return { 
        streams : Object.values(streams),
        currentUserID : googAuth.userID,
        isSignedIn : googAuth.isSignedIn
    }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);