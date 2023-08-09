import React from "react";
import { Link } from "react-router-dom";


function Cookies () {

    return (
        <div className="Cookies">
            <h1>Cookies!</h1>

            <div>
                <Link to="/">
                    BACK TO HOME
                </Link>
            </div>

            <img src="https://media.giphy.com/media/YovEFrZNGMkF2/giphy.gif" />
        </div>
    )
}


export default Cookies;
