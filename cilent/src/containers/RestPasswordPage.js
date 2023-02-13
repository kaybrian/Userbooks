import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { connect } from 'react-redux';
import { rest_password } from "../actions/auth";

const RestPassword = ({rest_password}) => {
    const [requestSent, setRequestSent ] = useState(false)

    const [formData, setFormdata] = useState({
        email: "",
    })

    const { email } = formData;

    const onChange = e => setFormdata({
        ...formData,
        [e.target.name]: e.target.value
    })


    const onSubmit = e => {
        e.preventDefault();

        rest_password(email);

        setRequestSent(true);

     }

    if (requestSent){
        return <Navigate to="/" />;
     }

    return (
        <div className="container mt-5">
            <h1>Rest Password</h1>
            <p>Rest Password Reset</p>

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
                </div>
                <button className="btn btn-primary mt-3" type="submit">
                    Ask for a Password Rest
                </button>
            </form>

        </div>
    )
};



export default connect(null, {rest_password})(RestPassword);
