import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logoblue from '../../../assets/images/logo-blue.svg';
import picture from '../../../assets/images/Picture.svg';

import './NoAuthWebsite.css'

const baseURL = 'http://localhost:8000/auth/login';

function NoAuthWebsite({ login }) {

    const [values, setValues] = useState({
        username: '',
        password: ''
    });
    const [auth, setAuth] = useState(false);

    useEffect(() => {

        return () => {
            setValues({});
        };
    }, []);

    const handleSubmit = (e) => {

        e.preventDefault();

        axios.post(baseURL, {
            username: values.username,
            password: values.password
        })
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                login(values.username);
                setValues({
                    username: '',
                    password: '',
                })
            })
            .catch(function (error) {

                console.log(error);
                setAuth(true);
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
        <div className='page-login-wrapper'>
            <div className='login-page'>
                <div className='logo-wrapper'>
                    <img src={logoblue} className="app-logo-blue" alt="logo-blue" />
                </div>
                <h1>Welcome to EVENT</h1>
                <h2>Event Apps for Conferences and Trade Shows</h2>
                <p>Core-apps is the leading provider of technology for the Trade Show and
                    Events Industry specializing in robust event apps designed to be scalable,
                    innovative and cost effective.</p>
                <div className='form'>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <input
                            value={values.username}
                            type='text'
                            placeholder='username'
                            name='username'
                            onChange={handleChange} />
                        <input
                            value={values.password}
                            type='password'
                            placeholder='password'
                            name='password'
                            onChange={handleChange} />
                        <p className={auth ? 'message' : 'hidden'}>Username or password entered incorrectly!</p>
                        <button>login</button>
                    </form>
                </div>
            </div>
            <div className='picture-wrapper'>
                <img src={picture} className='picture' alt="img" />
            </div>
        </div>
    );
};

export default NoAuthWebsite;
