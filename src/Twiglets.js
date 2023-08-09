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

            <img src="https://www.britishcornershop.co.uk/img/large/CS0024.jpg" />

        </div>
    )
}


export default Twiglets;
