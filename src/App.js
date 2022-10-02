import React from 'react';
import { Toaster } from 'react-hot-toast';
import Routes from './routes/routes';

function App() {
  return (
    <div className="App">
      <Toaster />
      <Routes />
    </div>
  );
}

export default App;
