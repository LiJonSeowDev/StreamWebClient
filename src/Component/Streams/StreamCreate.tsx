import React from 'react';
//import { Field , reduxForm, InjectedFormProps  } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../Actions';

import StreamForm from './StreamForm';


interface Props { };
class StreamCreate extends React.Component<Readonly< any >> {
    // componentDidMount(){
    //     console.log(this.props)
    // }
    componentDidMount(){
        //console.log(this);
    }

    onSubmit = ( formFieldValues :any ) => { 
        //createStream(formFieldValues)(null);
        this.props.createStream( formFieldValues );
        console.log(formFieldValues);
    }

    render(){
        return(
            <div>
                <h3> Create a Stream </h3>
                <StreamForm onSubmit={this.onSubmit}></StreamForm>
            </div>   
        )
    }
}


export default connect(null, {createStream} )(StreamCreate);