import React, { useEffect, useState } from 'react';
import { ContextToken } from './Context.js';

import AuthWebsite from './components/Main/AuthWebsite/AuthWebsite';
import NoAuthWebsite from './components/Main/NoAuthWebsite/NoAuthWebsite';

import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const token = sessionStorage.getItem('token');

  useEffect(() => {
    setUser(token);
  }, [token]);

  return (
    <ContextToken.Provider value={token}>
      {user ? (
        <AuthWebsite logout={() => setUser(null)} />
      ) : (
        <NoAuthWebsite login={username => setUser(username)} />
      )}
    </ContextToken.Provider>
  )
};

export default App;
