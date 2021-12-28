
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ContextToken } from '../../../../Context';
import moment from 'moment';

import picturepage from '../../../../assets/images/create-event.svg';

import './CreateEvents.css'
import { useHistory } from 'react-router-dom';

const baseURL = 'http://localhost:8000/list/event/create';


function CreateEvents() {

    const [errDate, setErrDate] = useState(false);
    const [errName, setErrName] = useState(false);

    const token = React.useContext(ContextToken);

    let history = useHistory();

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

        // const enteredRegistDate = new Date(values.registstart).toLocaleDateString()
        // const todayDate = new Date().toLocaleDateString();
        // const enteredRegistDateMs = new Date().getTime();
        // const todayDateMs = new Date().getTime();
        // console.log(enteredRegistDate, todayDate)

        // let check = false;      

        // switch (true) {
        //     case new Date().toLocaleDateString() === new Date(values.datestart).toLocaleDateString():
        //     case new Date().toLocaleDateString() === new Date(values.dateend).toLocaleDateString():
        //     case new Date().toLocaleDateString() === new Date(values.registstart).toLocaleDateString():
        //     case new Date().toLocaleDateString() === new Date(values.registend).toLocaleDateString():
        //         check = false;
        //         break;
        //     case new Date().getTime() > new Date(values.datestart).getTime():
        //     case new Date().getTime() > new Date(values.dateend).getTime():
        //     case new Date().getTime() > new Date(values.registstart).getTime():
        //     case new Date().getTime() > new Date(values.registend).getTime():
        //         check = true;
        //         break;           
        //     default: 
        //     check = false;
        // }

     

        if ((values.datestart > values.dateend || values.registstart > values.registend) ||
            (values.registstart && values.registend > values.datestart && values.dateend)) {                
            setErrDate(true);

        } else {
            
            setErrDate(false);
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
                    history.push('/events');
                })
                .catch(function (error) {
                    console.log(error);
                    setErrName(true);

                })
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        })
    };

   
   const carrentDate = moment(new Date().toLocaleDateString()).format('YYYY-MM-DD');

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
                                placeholder='Event title*'
                                name='nameevent'
                                className='input-name'
                                onChange={handleChange}
                                required
                                pattern='[A-Za-z0-9]{5,50}'
                                title='Please, only Latin letters'
                            />
                            <input
                                value={values.address}
                                type='text'
                                placeholder='Address*'
                                name='address'
                                className='input-name'
                                onChange={handleChange}
                                required
                                pattern='[A-Za-z0-9_-]{5,50}'
                                title='Please, only Latin letters' />
                        </div>
                        <p className={errName ? 'message' : 'hidden'}>Event with the same name already exists!</p>
                        <div className='middle-input'>
                            <div className='block-input'>
                                <label>Data start event*</label>
                                <input
                                    value={values.datestart}
                                    type='date'
                                    name='datestart'
                                    className='input-dates'
                                    onChange={handleChange}
                                    min={carrentDate}
                                    required />
                            </div>
                            <div className='block-input'>
                                <label>Data end event*</label>
                                <input
                                    value={values.dateend}
                                    type='date'
                                    name='dateend'
                                    className='input-dates'
                                    onChange={handleChange}
                                    min={carrentDate}
                                    required />
                            </div>
                            <div className='block-input'>
                                <label>Start registration*</label>
                                <input
                                    value={values.registstart}
                                    type='date'
                                    name='registstart'
                                    className='input-dates'
                                    onChange={handleChange}
                                    min={carrentDate}
                                    required />
                            </div>
                            <div className='block-input'>
                                <label>End registration*</label>
                                <input
                                    value={values.registend}
                                    type='date'
                                    name='registend'
                                    className='input-dates'
                                    onChange={handleChange}
                                    min={carrentDate}
                                    required />
                            </div>
                        </div>
                        <p className={errDate ? 'message' : 'hidden'}>Event start date cannot be more than the end date or less than the registration dates!</p>
                        <div>
                            <textarea
                                value={values.description}
                                type='text'
                                placeholder='Description event '
                                name='description'
                                className='input-area'
                                onChange={handleChange}
                                style={{ height: 120 }}
                                maxLength={130}
                                pattern='[A-Za-z0-9_-]'
                                title='Please, only Latin letters' />

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
