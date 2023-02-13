import React, { useState } from "react";
import { Navigate,useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { rest_password_confirm } from "../actions/auth";

const RestPasswordComfirm = ({ match, rest_password_confirm }) => {
    const [requestSent, setRequestSent] = useState(false)

    const {uid, token} = useParams();

    const [formData, setFormdata] = useState({
        new_password: "",
        re_new_password: ""
    })

    const { new_password, re_new_password } = formData

    const onChange = e => setFormdata({
        ...formData,
        [e.target.name]: e.target.value
    })


    const onSubmit = e => {
        e.preventDefault();

        console.log(uid + token)
        // const token = match.params.token;
        rest_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true);
    }

    if (requestSent) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="container mt-5">
            <form onSubmit={e => onSubmit(e)} className="mt-2">
                <div className="form-group">
                    <input
                        className="form-control mt-3"
                        type="password"
                        placeholder="New Password"
                        name="new_password"
                        value={new_password}
                        onChange={e => onChange(e)}
                        required
                        minLength={8}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control mt-3"
                        type="password"
                        placeholder="Confirm New password"
                        name="re_new_password"
                        value={re_new_password}
                        onChange={e => onChange(e)}
                        required
                        minLength={8}
                    />
                </div>
                <button className="btn btn-primary mt-3" type="submit">
                    Rest password
                </button>
            </form>

        </div>
    )
};



export default connect(null, { rest_password_confirm })(RestPasswordComfirm);
