import StreamAPI from '../api/streams';

const deleteStream = (id : number) => {
    return async (dispatch : any) => {
        const response = await StreamAPI.post(`./streams/${id}`);
        dispatch({ type : 'DELETE_STREAM' , payload : id});
    }
}

export default deleteStream;