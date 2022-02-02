import React from 'react';

import { Button } from '@mui/material';

import './Event.css'


function Event({ events, handleSubmit, handleSubmitDelete}) {

    const currentDate = Date.now();
  
    if (!events || events.length === 0) return <p> No data</p>

    return (
        <div className='card-wrapper'>
            {events.map((event) => {
                
                return <div key={event._id + currentDate} className='card'>
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
                    <Button style={{marginBottom: 10}} onClick={(e) => handleSubmit(e, event._id)} variant='contained'>Registration</Button>
                    <Button onClick={(e) => handleSubmitDelete(e, event._id)} variant='outlined'>Delete</Button>
                </div>
            })}
        </div>
    );
};

export default Event;
