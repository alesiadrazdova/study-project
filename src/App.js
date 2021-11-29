import React, { useState } from 'react';

import AuthWebsite from './components/Main/AuthWebsite/AuthWebsite';
import NoAuthWebsite from './components/Main/NoAuthWebsite/NoAuthWebsite';

import './App.css';

function App() {
  const [user, setUser] = useState(null);


  
  return user ? (
  <AuthWebsite logout={() => setUser(null)} user={user}/>
   ) : (
   <NoAuthWebsite login={username => setUser(username)}  />
   )
};

export default App;
