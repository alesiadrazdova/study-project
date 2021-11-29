import React from "react";

import logowight from '../../assets/images/logo-wight.svg';

import './Footer.css';

export default function Footer() {
    return (
        <div className='footer-wrapper'>
            <div className='footer'>
                <div className='logo-footer'>
                    <img src={logowight} className="app-logo" alt="logo" />
                </div>
                <div className='copyright'>
                    <p>© Copyright Event 2021. All Right Reserved.</p>
                </div>
            </div>
        </div>
    )
};
