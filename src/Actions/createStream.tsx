import StreamAPI from '../api/streams';

const createStream = (formValues : any) => {
    return async (dispatch : any) => {
        const response = await StreamAPI.post('./streams', formValues);
        dispatch({ type : 'CREATE_STREAM' , payload : response.data});
    }
}

export default createStream;