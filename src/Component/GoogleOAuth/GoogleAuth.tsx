import React from 'react';

const AffirmLoad = () => {
    console.log('loaded auth2' )
}



class GoogleAuth extends React.Component{
    state = { isSignedIn : null };
    auth : any;

    componentDidMount(){
        window.gapi.load('client:auth2' , () => {
            window.gapi.client.init({
                clientId : '963389238992-r27t6ocec750umo3bi5qekrv9hjdpc8j.apps.googleusercontent.com',
                scope : 'email'
            }).then( () => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.auth.isSignedIn.listen(this.onAuthChange);
                this.setState( { isSignedIn : this.auth.isSignedIn.get() } );
                
            })
        });
    }

    onAuthChange = () => {
        this.setState( { isSignedIn : this.auth.isSignedIn.get() } );
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.onSignOut();
    }

    renderAuthButton(){
        console.log(this.state.isSignedIn);
        if(this.state.isSignedIn === null){
            return null;
        }else if (this.state.isSignedIn){
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

export default GoogleAuth;