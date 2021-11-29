import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import BookedEvents from './BookedEvents/BookedEvents';
import CreateEvents from './CreateEvents/CreateEvents';
import Help from './Help/Help';
import ListEventsContainer from './ListEvents/ListEventsContainer';

import './AuthWebsite.css';

function AuthWebsite({ logout }) {
    const role = localStorage.getItem('role');

    return (
        <>
            <Header onClick={() => { logout() }} />
            <div className="App">

                <Switch>
                    <Route path='/' component={ListEventsContainer} exact />
                    {role === 'ADMIN' ? <Route path='/creating' component={CreateEvents} /> : null}
                    <Route path='/myevents' component={BookedEvents} />
                    <Route path='/help' component={Help} />
                </Switch>               
            </div>
             <Footer />
        </>

    );
};

export default AuthWebsite;
