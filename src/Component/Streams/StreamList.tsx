import React from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from '../../Actions';
import streams from '../../api/streams';

class StreamList extends React.Component<Readonly< any >>{
    
    componentDidMount(){
        this.props.fetchStreams();
    }

    renderList(){
        return (
            this.props.streams.map(
                (stream : Stream) => {
                    return (
                        <div className="item" key={stream.id}>
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
        console.log(this.props.streams);
        return(
            
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
            </div>
        )
    }
}


const mapStateToProps = ( {streams} : {streams : StreamDict<Stream>}) => {
    return { streams : Object.values(streams) }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);