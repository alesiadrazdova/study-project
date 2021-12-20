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

    const onClick = () => {
         logout();
         localStorage.removeItem('token');
         }

    return (
        <>
            <Header  onClick={ onClick }/>
            <div className="App">
                <Switch>
                    <Route path='/events' component={ListEventsContainer} />
                    <Route path='/creating' component={CreateEvents} />
                    <Route path='/myevents' component={BookedEvents} />
                    <Route path='/help' component={Help} />
                </Switch>
            </div>
            <Footer />
        </>

    );
};

export default AuthWebsite;
