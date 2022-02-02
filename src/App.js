import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';

import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
    setAuthToken(localStorage.token)
}

function App() {
    return (
        <AuthState>
            <ContactState>
                <AlertState>
                    <BrowserRouter>
                        <>
                            <NavBar />
                            <div className="container">
                                <Alerts />
                                <Routes>
                                    <Route
                                        path="/"
                                        element={
                                            <PrivateRoute>
                                                <Home />
                                            </PrivateRoute>
                                        }
                                    />
                                    <Route exact path="/about" element={<About />} />
                                    <Route exact path="/register" element={<Register />} />
                                    <Route exact path="/login" element={<Login />} />
                                </Routes>
                            </div>
                        </>
                    </BrowserRouter>
                </AlertState>
            </ContactState>
        </AuthState>

    );
}

export default App;



// "eslintConfig": {
//   "extends": [
//     "react-app",
//     "react-app/jest"
//   ]
// },