import React from "react";
import { Link } from "react-router-dom";
import "./Cookies.css";


function Cookies () {

    return (
        <div className="Cookies">
            <h1>Cookies!</h1>

            <div className="Cookies-content">
                <div className="Cookies-homelink">
                    <Link to="/">
                        BACK TO HOME
                    </Link>
                </div>

                <img src="https://media.giphy.com/media/YovEFrZNGMkF2/giphy.gif" />
            </div>

        </div>
    )
}


export default Cookies;
