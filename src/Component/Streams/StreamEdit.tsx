import React from 'react';
import { connect } from 'react-redux';

import {fetchStream , editStream} from  '../../Actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component<Readonly< any >>{

    componentDidMount(){
        if( !this.props.stream ){
            this.props.fetchStream(this.props.match.params.id);
        }
    }

    onSubmit = ( formFieldValues : { title : string , description : string } ) => { 
        this.props.editStream( this.props.stream.id, {title : formFieldValues.title, description : formFieldValues.description} );
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
                    <h3> Edit a Stream </h3>
                    <StreamForm 
                        initialValues={
                            {
                                title : this.props.stream.title,
                                description : this.props.stream.description
                            }
                        }
                        onSubmit={this.onSubmit} 
                    />
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

export default connect(mapStateToProps, {fetchStream , editStream})(StreamEdit);