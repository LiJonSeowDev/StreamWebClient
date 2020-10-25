import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({title, content, actionButtons, onDismiss, bubble} : {title : string, content : string, actionButtons : any, onDismiss : Function , bubble : boolean}) => {

    const handleClickBubble = ( e : React.MouseEvent) => {
        if(!bubble){
            e.stopPropagation();
        }
    }

    const container : HTMLElement | null = document.getElementById('modals');
    if(container !== null){
        return (
            ReactDOM.createPortal(
                <div className="ui dimmer modals visible active" onClick={ () => { onDismiss() } }>
                    <div className="ui standard modal visible active" onClick={ (e : React.MouseEvent) => {handleClickBubble(e);} } >
                        <div className="header"> {title} </div>
                        <div className="content"> {content} </div>
                        <div className="actions">
                            {actionButtons}
                        </div>
                    </div>
                </div>
            , container) 
        )        
    }
    else{
        return null;
    }
}

export default Modal;