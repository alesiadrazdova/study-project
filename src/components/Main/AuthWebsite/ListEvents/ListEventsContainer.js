import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ListEvents from './ListEvents';
import OnLoadingEventData from './LoadingEventsData';

function ListEventsContainer() {

    const DataLoading = OnLoadingEventData(ListEvents);
    const [eventState, setEventState] = useState(
        {
            loading: false,
            events: null
        }
    );

    useEffect(() => {
        setEventState({ loading: true });
        const baseURL = 'http://localhost:8000/list/events';
        axios.get(baseURL)
            .then((res) => {
                const response = res.data;
                setEventState({ 
                    loading: false,
                    events: response                    
                });
                
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [setEventState]);

    return (
        <div className='card-wrapper'>
            <DataLoading isLoading={ eventState.loading } events={ eventState.events } />            
        </div>
    );
};

export default ListEventsContainer;
