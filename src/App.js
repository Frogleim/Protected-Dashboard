import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';

function App() {
  const token = localStorage.getItem('refreshToken');

  if(!token) {
    return <Login />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home/>}/>
          <Route path="/">
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;