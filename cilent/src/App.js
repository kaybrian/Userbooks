import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './containers/Homepage';
import Layout from './hoc/Layout';
import Login from './containers/LoginPage';
import RestPasswordComfirm from './containers/RestPasswordConfirm';
import ResetPassword from './containers/RestPasswordPage';
import Activate from './containers/Activate';
import Signup from './containers/Signup';
import store from './store';
import { Provider } from 'react-redux';


const App = () => (
    <Provider store={store}>
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

    </Provider>

);

export default App;
