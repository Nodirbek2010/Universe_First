import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Sidebar/index';
import Example from './components/Example/index';
import Examplee from './components/Example2';
import Youtube from './components/YouTube';
import Login from './components/login/login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/main" element={<Home />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/documentation" element={<Example />} />
        <Route path="/example22" element={<Examplee />} />  
      </Routes>
    </Router>
  );
};

export default App;
