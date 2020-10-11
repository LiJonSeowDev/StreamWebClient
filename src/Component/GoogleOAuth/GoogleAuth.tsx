import React from 'react';
import { connect } from 'react-redux';

import {signInAction , signOutAction} from '../../Actions';

class GoogleAuth extends React.Component<{isSignedIn : boolean , userID : string , signInAction : Function , signOutAction : Function}>{

    auth : any;

    componentDidMount(){
        window.gapi.load('client:auth2' , () => {
            window.gapi.client.init({
                clientId : '963389238992-r27t6ocec750umo3bi5qekrv9hjdpc8j.apps.googleusercontent.com',
                scope : 'email'
            }).then( () => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange( this.auth.isSignedIn.get()  );
                this.auth.isSignedIn.listen(this.onAuthChange);
                
            })
        });
    }

    componentDidUpdate(){
        //console.log('userID is', this.props.userID);
    }

    onAuthChange = (isSignedIn : boolean) => {
        if (isSignedIn) {
            this.props.signInAction( this.auth.currentUser.get().getId() );
        }
        else{
            this.props.signOutAction();
        }

    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.onSignOut();
    }

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        }else if (this.props.isSignedIn){
            return (
                <div>  
                    <button className="ui red google button" onClick={ ()=>{ this.auth.signOut() } }>
                        <i className="google icon"></i>
                        Sign Out
                    </button>
                </div>
                )
        }else{
            return (
                <div>  
                    <button className="ui red google button" onClick={ ()=>{ this.auth.signIn() } }>
                        <i className="google icon"></i>
                        Google SignIn
                    </button>
                </div>
                )
        }
    }

    render(){
        return(
            <div>{this.renderAuthButton()}</div>
        )
    }

}

const mapStateToProps = (state : any) => {
    return { 
        isSignedIn : state.googAuth.isSignedIn ,
        userID : state.googAuth.userID
    };
}

export default connect( mapStateToProps, { signInAction, signOutAction } )(GoogleAuth);