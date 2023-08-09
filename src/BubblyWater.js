import React from "react";
import { Link } from "react-router-dom";
import "./BubblyWater.css";


function BubblyWater () {

    return (
        <div className="BubblyWater">
            <h1>Bubbly Water!</h1>

            <div className="BubblyWater-content">
                <div className="BubblyWater-homelink">
                    <Link to="/">
                        BACK TO HOME
                    </Link>
                </div>

                <img
                    src="https://media.giphy.com/media/AGEykFYzcjANclu4rw/giphy.gif"
                    alt="La Croix in a watermelon"
                />
            </div>

        </div>
    )
}


export default BubblyWater;
