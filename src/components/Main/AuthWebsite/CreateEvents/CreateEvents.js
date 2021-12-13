
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ContextToken } from '../../../../Context';

import picturepage from '../../../../assets/images/create-event.svg';

import './CreateEvents.css'

const baseURL = 'http://localhost:8000/list/event/create';

function CreateEvents() {

    const token = React.useContext(ContextToken);

    const [values, setValues] = useState({
        nameevent: '',
        description: '',
        datestart: '',
        dateend: '',
        registstart: '',
        registend: '',
        address: '',
        picture: ''
    });
    
    useEffect(() => {

        return () => {
            setValues({});
        };
    }, []);

    const handleSubmit = (e) => {

        e.preventDefault();

        axios.post(baseURL, {
            nameevent: values.nameevent,
            description: values.description,
            datestart: values.datestart,
            dateend: values.dateend,
            registstart: values.registstart,
            registend: values.registend,
            address: values.address,
            picture: values.picture,
            token
        })
            .then((response) => {
                const event = response.data;
                console.log(event);
                setValues({
                    nameevent: '',
                    description: '',
                    datestart: '',
                    dateend: '',
                    registstart: '',
                    registend: '',
                    address: '',
                    picture: ''
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        })
    };

    return (
        <div className='creat-events'>
            <div>
                <h1>Create EVENT</h1>
                <h2>Fill in the event details in this form</h2>
            </div>

            <div className='create-event-page'>

                <div className='form-wrapper-event'>
                    <form onSubmit={handleSubmit}>
                        <div className='top-input'>
                            <input
                                value={values.nameevent}
                                type='text'
                                placeholder='Event title'
                                name='nameevent'
                                className='input-name'
                                onChange={handleChange} />
                            <input
                                value={values.address}
                                type='text'
                                placeholder='Address '
                                name='address'
                                className='input-name'
                                onChange={handleChange} />
                        </div>
                        <div className='top-input'>
                            <input
                                value={values.datestart}
                                type='date'
                                name='datestart'
                                className='input-dates'
                                onChange={handleChange} />
                            <input
                                value={values.dateend}
                                type='date'
                                name='dateend'
                                className='input-dates'
                                onChange={handleChange} />
                            <input
                                value={values.registstart}
                                type='date'
                                name='registstart'
                                className='input-dates'
                                onChange={handleChange} />
                            <input
                                value={values.registend}
                                type='date'
                                name='registend'
                                className='input-dates'
                                onChange={handleChange} />
                        </div>

                        <div>
                            <textarea
                                value={values.description}
                                type='text'
                                placeholder='Description event '
                                name='description'
                                className='input-area'
                                onChange={handleChange}
                                style={{height: 120}} />

                            <input
                                value={values.picture}
                                type='file'
                                name='picture'
                                className='file'
                                onChange={handleChange} />
                        </div>
                        <button>Create event</button>
                    </form>
                </div>

                <div className='img-event'>
                    <img src={picturepage} className='picture-event' alt="img" />
                </div>

            </div>
        </div>
    );
};

export default CreateEvents;
