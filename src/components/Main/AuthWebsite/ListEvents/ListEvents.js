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
                        <h4>{event.nameevent}</h4>
                        <p>{event.description}</p>
                        <span>{event.datestart}</span>
                        <span>{event.dateend}</span>
                        <span>{event.registstart}</span>
                        <span>{event.registend}</span>
                        <span>{event.address}</span>
                    </div>
                })}
            </div>
    );
};

export default ListEvents;
