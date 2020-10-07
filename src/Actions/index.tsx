const signInAction = ( userID : string) => {
    return {
        type: 'GOOG_SIGN_IN',
        payload: userID
    }
}

const signOutAction = () => {
    return {
        type: 'GOOG_SIGN_OUT'
    }
}

export {signInAction , signOutAction};