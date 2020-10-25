import React from 'react';
import {Link} from 'react-router-dom';
import Modal from '../Modal';
import history from '../../History';

const StreamDelete = () => {

    const actionButtons = (
        <>
            <button className="ui button negative"> Delete </button>
            <button className="ui button"> Cancel </button>
        </>
    )

    return(
        <div> 
            StreamDelete
            <Modal title="Delete Stream" content="Are you sure you want to delete this Stream ?" actionButtons={actionButtons} onDismiss={()=>{ history.push('/') }} bubble={false}/>
        </div>
    )
}

export default StreamDelete;