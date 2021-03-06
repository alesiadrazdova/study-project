import * as React from 'react';
import { ContextToken } from '../../Context.js';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import { AppBar, Box, Toolbar, Button } from '@mui/material';
import logowight from '../../assets/images/logo-wight.svg';

import './Header.css';

const Header = ({ onClick }) => {

    const token = React.useContext(ContextToken);
    const tokenDecoded = jwt_decode(token);
    const role = tokenDecoded.roles[0];

    
    const [roleValue] = React.useState(role);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className='wrapper-header'>
                    <div className='logo-wrapper'>
                        <Link to='/events'><img src={logowight} className="app-logo" alt="logo" /></Link>
                    </div>
                    <nav className='links-header'>
                        <ul className='header-links'>
                            {roleValue === 'ADMIN' ? <li><Link to='/createevent'>Create Events</Link></li> : <div className='link-hidden'></div>}

                            <li><Link to='/myevents'>My Tickets</Link></li>
                            <li><Link to='/help'>Help</Link></li>
                        </ul>
                    </nav>
                    <div className='button-wrapper'>
                        <Button onClick={onClick} color='inherit'>Logout</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>

    );
}

export default Header;
