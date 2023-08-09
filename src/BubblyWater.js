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

        </div>
    )
}


export default BubblyWater;
