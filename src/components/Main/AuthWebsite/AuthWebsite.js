import React, { useState } from 'react';
import { ContextRole } from '../../../Context.js';
import { Switch, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import BookedEvents from './BookedEvents/BookedEvents';
import CreateEvents from './CreateEvents/CreateEvents';
import Help from './Help/Help';
import ListEventsContainer from './ListEvents/ListEventsContainer';

import './AuthWebsite.css';

function AuthWebsite({ logout }) {

    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    const role = decoded.roles[0];
    const [roleValue] = useState(role);

    return (
        <ContextRole.Provider value={roleValue}>
            <Header onClick={() => { logout() }} />
            <div className="App">
                <Switch>
                    <Route path='/' component={ListEventsContainer} exact />
                    <Route path='/creating' component={CreateEvents} />
                    <Route path='/myevents' component={BookedEvents} />
                    <Route path='/help' component={Help} />
                </Switch>
            </div>
            <Footer />
        </ContextRole.Provider>
    );
};

export default AuthWebsite;
