import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import StreamCreate from './Streams/StreamCreate';
import StreamDelete from './Streams/StreamDelete';
import StreamEdit from './Streams/StreamEdit';
import StreamList from './Streams/StreamList';
import StreamShow from './Streams/StreamShow';

import HeaderBanner from './Header/HeaderBanner';


const App = (prop : any) =>{
    return (
        <div>
            <BrowserRouter>
                <div>
                    <HeaderBanner />
                    <Route path='/' exact component={StreamList} ></Route>
                    <Route path='/new'exact component={StreamCreate} ></Route>
                    <Route path='/edit' exact component={StreamEdit} ></Route>
                    <Route path='/delete' exact component={StreamDelete} ></Route>
                    <Route path='/show' exact component={StreamShow} ></Route>
                </div>
            </BrowserRouter>
        </div>

    )
}

export default App;