import React from 'react';
import GAuth from '../GoogleOAuth/GoogleAuth';

import {Link} from 'react-router-dom';

const HeaderBanner = () => {
    return(
        <div className="ui secondary pointing menu"> 
            <Link to="/" className="item"> Streamy </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Streams
                </Link>
                <GAuth />
            </div>
        </div>
    )
}


export default HeaderBanner;