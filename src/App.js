import React from 'react';
import './App.css';
import './component/page.css'
import Page from './component/page'
import Contact from './component/contact'
import Notify from './component/notify';
import Dietary from './component/dietary';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
  <Router>
  <Routes>
      <Route path='/' element={<Page/>}/>
      <Route path='/contact_us.html'  element ={<Contact/>}/>
      <Route path='/notify.html' element={<Notify/>}/>
      <Route path='/dietary_chart.html' element={<Dietary/>}/>
  </Routes>
  </Router>
  );
}

export default App;
