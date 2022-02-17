import React, { useEffect, useState } from 'react';
import Event from '../ListEvents/Event/Event';
import axios from 'axios';
import { ContextToken } from '../../../../Context';


const baseURL = 'http://localhost:8000/auth/alluserevents';

function BookedEvents() {


    const token = React.useContext(ContextToken);

    
    const [eventState, setEventState] = useState({ events: null });
    

    useEffect(() => {        
   
        axios.post(baseURL, { token })
        
            .then((res) => {
                const response = res.data;
                console.log("preview", response)
                setEventState({
                    events: response
                });
            })
            .catch(function (error) {
                console.log(error);
            });
            return () => {
                setEventState({ events: null });
            };
    }, [setEventState, token]);

    

    const handleSubmitDelete = (e, eventID) => {
      
        console.log(eventID);

        e.preventDefault();

        axios.delete(`http://localhost:8000/auth/alluserevents/${eventID}`, { 
            params: {
                id: eventID
            },
            headers: {
                token
            }

         })
            .then((res) => {
                const response = res.data;
                console.log(response)

                setEventState({
                    events: response
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    return (
        <div className="App" >
            <Event events={eventState.events} handleSubmitDelete={handleSubmitDelete}/>
        </div>
    );
};

export default BookedEvents;
