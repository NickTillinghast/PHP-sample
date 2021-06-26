import React from 'react';
import ApiButton from './components/ApiButton';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/quotes" component={ApiButton} />
      </div>
    </BrowserRouter>
  );
}

export default App;

