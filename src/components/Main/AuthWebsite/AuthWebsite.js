
import { Button } from '@mui/material';
import React from 'react';

import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

function AuthWebsite({logout, user}) {
    return (
        <div className="App">
            <Header />
            <div style={{fontSize: '36px'}}>Hello {user}!!!</div>
            <Button onClick={() => logout()} variant='contained'>Logout</Button>

            <Footer />
        </div>
    );
};

export default AuthWebsite;
