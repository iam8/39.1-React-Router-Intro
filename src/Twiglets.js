import React from "react";
import { Link } from "react-router-dom";
import "./Twiglets.css";


function Twiglets () {

    return (
        <div className="Twiglets">
            <h1>Twiglets!</h1>

            <div className="Twiglets-content">
                <div className="Twiglets-homelink">
                    <Link to="/">
                        BACK TO HOME
                    </Link>
                </div>

                <img src="https://www.britishcornershop.co.uk/img/large/CS0024.jpg" />
            </div>

        </div>
    )
}


export default Twiglets;
