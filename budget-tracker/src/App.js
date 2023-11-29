import React from 'react';
import Navbar from './components/index';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import History from './pges/history';
import Home from './pges/'
import AddTransaction from './pges/addTransaction';
import './App.css';
function App() {
  return (
    <div>
    <Router>
      <div>
      <Navbar />
      </div>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/review' element={<History />} />
        <Route path='/addTransaction' element={<AddTransaction />} />
      </Routes>
    </Router>
    </div>
  )
}
export default App;