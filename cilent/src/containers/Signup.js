import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from 'react-redux';
import { user_sign_up } from '../actions/auth';


const Signup = ({ user_sign_up }) => {
    const [requestSent, setRequestSent] = useState(false)

    const [formData, setFormdata] = useState({
        name: "",
        email: "",
        password: "",
        re_password: ""
    })

    const { name, email, password, re_password } = formData

    const onChange = e => setFormdata({
        ...formData,
        [e.target.name]: e.target.value
    })


    const onSubmit = e => {
        e.preventDefault();

        user_sign_up(name, email, password, re_password);
        setRequestSent(true)
    }

    if (requestSent) {
        return <Navigate to="/" />;
    }

    return (
        <div className="container mt-5">
            <h1>Sign U</h1>
            <p>Create an Account with us,  Its free </p>

            <form onSubmit={e => onSubmit(e)} className="mt-2">
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Your full Name"
                        name="name"
                        value={name}
                        onChange={e => onChange(e)}
                        required
                    />
                    <input
                        className="form-control mt-2"
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
                    <input
                        className="form-control mt-3"
                        type="password"
                        placeholder="Confirm Password"
                        name="re_password"
                        value={re_password}
                        onChange={e => onChange(e)}
                        required
                        minLength={8}
                    />
                </div>
                <button className="btn btn-primary mt-3" type="submit">
                    Sign Up
                </button>
            </form>
            <p className="mt-3">
                Already have an account? <Link to="/login" >Login </Link>
            </p>

        </div>
    )
};


export default connect(null, { user_sign_up })(Signup);
