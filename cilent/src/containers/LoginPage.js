import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';



const Login = () => {
    const [formdata, setFormData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formdata;

    const onchange = e => {
        setFormData({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        // login functions

    }

    // is the user Authenticated :
    // redirect to the home page

    return (
        <div className="container mt-5">
            <h1>Sign In</h1>
            <p>Sign into your account</p>

            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={e => onchange(e)}
                        required
                    />
                    <input
                        className="form-control"
                        type="password"
                        placeholder="password"
                        name="password"
                        value={password}
                        onChange={e => onchange(e)}
                        required
                        minLength={8}
                    />
                </div>
                <button className="btn btn-primary" type="submit">
                    Login
                </button>
            </form>
            <p className="mt-3">
                Don't have an account? <Link to="/singup" >Sign up</Link>
            </p>
            <p className="mt-3">
                Forgot your Password ? <Link to="rest-password">Rest password</Link>
            </p>

        </div>
    )
};

// const mapStateToProps = state => ({
//     // pass the authenticated state

// });


export default connect(null, {})(Login);
