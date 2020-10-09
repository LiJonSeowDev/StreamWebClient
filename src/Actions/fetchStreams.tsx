import StreamAPI from '../api/streams';

const fetchStreams = () => {
    return async (dispatch : any) => {
        const response = await StreamAPI.get('./streams');
        dispatch({ type : 'FETCH_STREAMS' , payload : response.data});
    }
}

export default fetchStreams;