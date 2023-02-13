import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from 'react-redux';
import {login} from '../actions/auth';


const Login = ({login, isAuthenticated}) => {
    const [formData, setFormdata] = useState({
        email: "",
        password: ""
    })

    const { email, password } = formData

    const onChange = e => setFormdata({
        ...formData,
        [e.target.name]: e.target.value
    })


    const onSubmit = e => {
        e.preventDefault();

        login(email, password)
     }

     if (isAuthenticated){
        return <Navigate to="/" />;
     }

    return (
        <div className="container mt-5">
            <h1>Sign In</h1>
            <p>Sign into your account</p>

            <form onSubmit={e => onSubmit(e)} className="mt-2">
                <div className="form-group">
                    <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                    <input
                        className="form-control mt-3"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        required
                        minLength={8}
                    />
                </div>
                <button className="btn btn-primary mt-3" type="submit">
                    Login
                </button>
            </form>
            <p className="mt-3">
                Don't have an account? <Link to="/signup" >Sign up</Link>
            </p>
            <p className="mt-3">
                Forgot your Password ? <Link to="/reset-password">Rest password</Link>
            </p>

        </div>
    )
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps, {login})(Login);
