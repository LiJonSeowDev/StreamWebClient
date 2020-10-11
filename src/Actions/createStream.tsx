import StreamAPI from '../api/streams';

const createStream = (formValues : any) => {
    return async (dispatch : any, getState : Function) => {
        const { userID } = getState().googAuth;

        const response = await StreamAPI.post('./streams', {...formValues, userID});
        dispatch({ type : 'CREATE_STREAM' , payload : response.data});
    }
}

export default createStream;