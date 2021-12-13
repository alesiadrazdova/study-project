import React, { useEffect, useState } from 'react';
import { ContextToken } from '../../../../Context';
import axios from 'axios';

import ListEvents from './ListEvents';
import OnLoadingEventData from './LoadingEventsData';

function ListEventsContainer() {

    const token = React.useContext(ContextToken);

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
        axios.post(baseURL, { token })
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
    }, [setEventState, token]);

    return (
        <div className='card-wrapper'>
            <DataLoading isLoading={ eventState.loading } events={ eventState.events } />            
        </div>
    );
};

export default ListEventsContainer;
