import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Login from './Login';
import Register from './Register';
function App() {
  return (
    <div >
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/registration' element={<Register/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
