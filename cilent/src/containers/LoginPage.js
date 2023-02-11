import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
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

    const onSubmit = e =>{
        e.preventDefault();

        // login functions

    }

    // is the user Authenticated :
    // redirect to the home page

    return (
        <div  className="container mt-5">
            <h1>Sign In</h1>
            <p>Sign into your account</p>

            <form onSubmit={e => onSubmit(e)}>

            </form>

        </div>
    )
};


export default Login;
