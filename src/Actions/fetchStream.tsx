import StreamAPI from '../api/streams';

const fetchStream = (id : number ) => {
    return async (dispatch : any) => {
        const response = await StreamAPI.get(`./streams/${id}`);
        dispatch({ type : 'FETCH_STREAM' , payload : response.data});
    }
}

export default fetchStream;