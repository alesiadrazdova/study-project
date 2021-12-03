import React from 'react';

import './ListEvents.css'


function ListEvents(props) {

    const { events } = props;

    if (!events || events.length === 0) return <p> No data</p>

    return (
            <div className='card-wrapper'>
                {events.map((event) => {
                    return <div key={event._id} className='card'>
                        <div>
                            <img src={event.picture} alt='img' />
                        </div>
                        <h3>{event.nameevent}</h3>
                        <p>{event.description}</p>
                        <p><span>Date start: </span>{event.datestart}</p>
                        <p><span>Date end: </span>{event.dateend}</p>
                        <p><span>Registration start: </span>{event.registstart}</p>
                        <p><span>End of registration: </span>{event.registend}</p>
                        <p><span>Location: </span>{event.address}</p>
                    </div>
                })}
            </div>
    );
};

export default ListEvents;
