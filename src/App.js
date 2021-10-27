import React, { useState } from 'react';

import AuthWebsite from './components/AuthWebsite';
import NoAuthWebsite from './components/NoAuthWebsite';

import './App.css';

function App() {
  const [user, setUser] = useState(null);
  
  return (
    <div className='wrapper-app'>
      {user ? <AuthWebsite logout={() => setUser(null)} user={user} /> : <NoAuthWebsite login={username => setUser(username)} />}
    </div>
  ) 
};

export default App;
