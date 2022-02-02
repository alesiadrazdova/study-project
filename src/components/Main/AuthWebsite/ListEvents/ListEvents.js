import React from 'react';
import axios from 'axios';
import { ContextToken } from '../../../../Context';

import Event from './Event/Event';

import './ListEvents.css'

const baseURL = 'http://localhost:8000/auth/userevents';



function ListEvents(props) {

    const token = React.useContext(ContextToken);

    const { events } = props;

    if (!events || events.length === 0) return <p> No data</p>

    const handleSubmit = (e, eventID) => {

        console.log(eventID);

        e.preventDefault();

        axios.post(baseURL, {
            _id: eventID,
            token
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    
    return (
        <div className='card-wrapper'>
            <Event events={events} handleSubmit={handleSubmit} />
        </div>
    );
};

export default ListEvents;
