import createStream from './createStream';
import deleteStream from './deleteStream';
import editStream from './editStream';
import fetchStream from './fetchStream';
import fetchStreams from './fetchStreams';


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

export {signInAction , signOutAction, createStream, deleteStream, editStream, fetchStream, fetchStreams};