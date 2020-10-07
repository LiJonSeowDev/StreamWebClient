const INITIAL_STATE = {
    isSignedIn : null,
    userID : null
};


export default ( state = INITIAL_STATE , action : any)=> {
    switch(action.type){
        case 'GOOG_SIGN_IN':
            return {...state, isSignedIn : true , userID: action.payload}
        case 'GOOG_SIGN_OUT':
            return {...state, isSignedIn : false}
        default :
            return state;
        
    }
}