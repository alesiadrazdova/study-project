import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

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
                // console.log(response)

                login(values.username);
                localStorage.setItem('token', response.data.token);
                setValues({
                    username: '',
                    password: '',
                })
            })
            .catch(function (error) {
                console.log(error);
                setAuth(true);
            })

    }


    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        })
    }

    return (
        <div className='App'>
            <Header />
            <div className='login-page'>
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
                        <p className={auth ? 'message' : 'hidden'}>Имя или пароль введен неверно!</p>
                        <button>login</button>

                    </form>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default NoAuthWebsite;
