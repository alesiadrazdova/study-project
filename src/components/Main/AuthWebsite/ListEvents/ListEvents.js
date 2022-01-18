import React from 'react';
import axios from 'axios';
import { ContextToken } from '../../../../Context';

import { Button } from '@mui/material';

import './ListEvents.css'

const baseURL = 'http://localhost:8000/auth/userevents';


function ListEvents(props) {

    const token = React.useContext(ContextToken);

    const { events } = props;
    // console.log(events)

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
            {events.map((event) => {
                return <div key={event._id} className='card'>
                    <div>
                        <img src={event.picture} alt='img' />
                    </div>
                    <h3>{event.nameevent}</h3>
                    <p><span>Date start: </span>{event.datestart}</p>
                    <p><span>Date end: </span>{event.dateend}</p>
                    <p><span>Registration start: </span>{event.registstart}</p>
                    <p><span>End of registration: </span>{event.registend}</p>
                    <p className='last-description'><span>Location: </span>{event.address}</p>
                    <p>{event.description}</p>
                    <Button onClick={(e) => handleSubmit(e, event._id)} variant='contained'>Registration</Button>
                </div>
            })}
        </div>
    );
};

export default ListEvents;
