import React from 'react';
import { ContextToken } from '../../../Context.js';
import { Switch, Route } from 'react-router-dom';

import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import BookedEvents from './BookedEvents/BookedEvents';
import CreateEvents from './CreateEvents/CreateEvents';
import Help from './Help/Help';
import ListEventsContainer from './ListEvents/ListEventsContainer';

import './AuthWebsite.css';

function AuthWebsite({ logout }) {

    const token = localStorage.getItem('token');
  

    return (
        <ContextToken.Provider value={token}>
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
        </ContextToken.Provider>
    );
};

export default AuthWebsite;
