import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { user_verify } from "../actions/auth";

const Activate = ({ user_verify }) => {
    const [requestSent, setRequestSent] = useState(false)

    const { uid, token } = useParams();


    const onSubmit = e => {
        e.preventDefault();

        user_verify(uid, token);
        setRequestSent(true);
    }

    if (requestSent) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="container mt-5">
            <div className="d-flex align-items-center">
                <form onSubmit={e => onSubmit(e)} className="mt-2">
                    <button className="btn btn-primary mt-3 " type="submit">
                        Verify Account
                    </button>
                </form>
            </div>

        </div>
    )
};



export default connect(null, { user_verify })(Activate);
