import React from 'react';
import { Field , reduxForm, InjectedFormProps  } from 'redux-form';



class StreamForm extends React.Component< Readonly<{onSubmitAction : Function} & any> & InjectedFormProps<{ props : {onSubmitAction : Function & any}} , {}, any>> {
    // componentDidMount(){
    //     console.log(this.props)
    // }
    
    componentDidMount(){
        //console.log(this);
    }

    renderError({error, touched} : {error : string , touched : boolean}){
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )

        }
    }

    
    renderInput = ( {input , label, meta} : any  ) => { 
        
        // by default the function will be called by ReduxForms with 1 parameter containing object { input , meta } 
        // They have already defined onChange(){} for you to the redux state. so you just need to deserialize it here like so. i.e. <input onChange={input.onChange} on... ... ... >

        //console.log(meta);
        return (
            <div className={`field ${meta.error && meta.touched ? 'error'  : '' }`}> 
                <label> {label}  </label>
                <input  {...input} placeholder={label} autoComplete="off" /> 
                <div> {this.renderError(meta)} </div>
            </div>
            
        )
    }


    // onSubmit = ( formFieldValues :any ) => { 
    //     //createStream(formFieldValues)(null);
    //     this.props.createStream( formFieldValues );
    //     console.log(this.props.createStream);
    //     console.log(formFieldValues);
    // }

    render(){
        return(
            <form onSubmit={this.props.handleSubmit(this.props.onSubmit)} className="ui form error">
                <Field  name="title" component={ this.renderInput }  label="Enter Title" />
                <Field  name="description" component={ this.renderInput }  label="Enter Description" />       
                <button className="ui button primary"> Submit </button>         
            </form>
        )
    }
}


const validateForm = ( props : any ) => {
    const errors : FormErrors<string> = {} ;
    if(!props.title){
        errors.title = 'You must enter a title!';
    }
    if(!props.description){
        errors.description = "You must enter a description!";
    }
    return errors;

}

const wrappedForm = reduxForm({
    form : 'StreamForm',
    validate : validateForm
})(StreamForm)


export default wrappedForm;