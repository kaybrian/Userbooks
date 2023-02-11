import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './containers/Homepage';
import Layout from './components/Layout';
import Login from './containers/LoginPage';
import RestPasswordComfirm from './containers/RestPasswordConfirm';
import ResetPassword from './containers/RestPasswordPage';
import Activate from './containers/Activate';
import Signup from './containers/Signup';



const App = () => (
    <Router>
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/reset-password' element={<ResetPassword />} />
                <Route path='/password/reset/comfirm/:uid/:token' element={<RestPasswordComfirm />} />
                <Route path='/activate/:uid/:token' element={<Activate />} />
            </Routes>
        </Layout>
    </Router>
);

export default App;
