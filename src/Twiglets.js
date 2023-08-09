import React from "react";
import { Link } from "react-router-dom";


function Twiglets () {

    return (
        <div className="Twiglets">
            <h1>Twiglets!</h1>

            <div>
                <Link to="/">
                    BACK TO HOME
                </Link>
            </div>

        </div>
    )
}


export default Twiglets;
