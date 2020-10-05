import React, { useState } from 'react';
import './App.css';
import AppRouter from './AppRouter';
import InfoContext from './InfoContext';

function App() {
  const [ info, setInfo ] = useState('');

  return (
    <InfoContext.Provider value={{info, setInfo}}>
      <AppRouter />
    </InfoContext.Provider>
  );
}

export default App;
