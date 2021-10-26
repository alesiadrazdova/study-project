import * as React from 'react';
import { AppBar, Box, Toolbar, Button } from '@mui/material';
import logo from '../../logo.svg';

import './Header.css';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <div className='logo-wrapper'>
                        <img src={logo} className="app-logo" alt="logo" />
                    </div>
                    <div className='button-wrapper'>
                        <Button color='inherit' className='btn-header'>Login</Button>
                        <Button variant='outlined' color='inherit' className='btn-header'>Signup</Button>
                    </div>

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
