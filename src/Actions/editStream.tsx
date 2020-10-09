import StreamAPI from '../api/streams';

const editStream = (id : number, formValues : any) => {
    return async (dispatch : any) => {
        const response = await StreamAPI.put(`./streams/${id}`, formValues);
        dispatch({ type : 'EDIT_STREAM' , payload : response.data});
    }
}

export default editStream;