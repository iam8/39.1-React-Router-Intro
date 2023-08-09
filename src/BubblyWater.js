import React from "react";
import { Link } from "react-router-dom";


function BubblyWater () {

    return (
        <div className="BubblyWater">
            <h1>Bubbly water!</h1>

            <div>
                <Link to="/">
                    BACK TO HOME
                </Link>
            </div>

            <img src="https://media.giphy.com/media/AGEykFYzcjANclu4rw/giphy.gif" />
        </div>
    )
}


export default BubblyWater;
