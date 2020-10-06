import React from 'react';

const AffirmLoad = () => {
    console.log('loaded auth2' )
}



class GoogleAuth extends React.Component{



    componentDidMount(){
        window.gapi.load('client:auth2' , () => {
            window.gapi.client.init({
                clientId : '963389238992-r27t6ocec750umo3bi5qekrv9hjdpc8j.apps.googleusercontent.com',
                scope : 'email'
            })
        });
    }

    render(){
        return(
            <div>GOOG AUTH</div>
        )
    }

}

export default GoogleAuth;