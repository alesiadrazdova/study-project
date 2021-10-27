import * as React from 'react';

import { AppBar, Box, Toolbar, Button } from '@mui/material';
import logo from '../../logo.svg';

import './Header.css';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className='wrapper-header'>
                    <div className='logo-wrapper'>
                        <img src={logo} className="app-logo" alt="logo" />
                    </div>
                    <div className='links-header'>
                        <a href='/'>Find Events</a>
                        <a href='/'>My Tickets</a>
                        <a href='/'>Help</a>
                    </div>
                    <div className='button-wrapper'>
                        <Button color='inherit' className='btn-header'>Login</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
