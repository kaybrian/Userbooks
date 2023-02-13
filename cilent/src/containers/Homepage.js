import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="container">
            <div className="jumbotron mt-4">
                <p className="display-4">Welcome to Auth system </p>
                <p className="lead">An auth sytem ready for production </p>
                <hr className="my-4" />
                <p>
                    CLick the login Button
                </p>

                <Link className="btn btn-primary btn-lg" role="button" to="/login" >
                    Login
                </Link>

            </div>
        </div>
    )
};


export default Home;
