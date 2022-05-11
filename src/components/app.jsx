import React, { Component } from 'react';
import NavBar from './navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './content/home';
import Calc from './content/calc';
import Login from './content/login';
import Register from './content/register';
import NotFound from './content/notfound';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <NavBar />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/calc' element={<Calc />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/404' element={<NotFound />} />
                        <Route path="*" element={ <Navigate replace to="/404" /> } />
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;