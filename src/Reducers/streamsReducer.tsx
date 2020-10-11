import _ from 'lodash';

type Stream = {
    id : number,
    title : string,
    description : string
}

interface StreamDict<TValue> {
    [key: string]: TValue;
}


export default (state : StreamDict<Stream> = {} , action : any) => {
    switch(action.type) {
        
        case 'FETCH_STREAM' :
            return ({...state, [action.payload.id] : action.payload});

        case 'CREATE_STREAM' :
            return ({...state, [action.payload.id] : action.payload});

        case 'EDIT_STREAM' :
            return ({...state, [action.payload.id] : action.payload});

        case 'DELETE_STREAM' :
            let curState = {...state};
            delete curState[action.payload]
            return (curState);

        case 'FETCH_STREAMS' :

            let payloadState = (_.mapKeys( action.payload , 'id' ));
            return ( {...state , ...payloadState} );


        default :
            return state;
    }

}