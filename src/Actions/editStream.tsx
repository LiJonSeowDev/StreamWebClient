import StreamAPI from '../api/streams';
import History from '../History';
const editStream = (id : number, formValues : any) => {


    return async (dispatch : any , getState : Function) => {
        const { userID } = getState().googAuth;
        const response = await StreamAPI.patch(`./streams/${id}`, {...formValues , userID});
        dispatch({ type : 'EDIT_STREAM' , payload : response.data});
        History.push('/');
    }
}

export default editStream;