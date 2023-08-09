import React from "react";
import { Link } from "react-router-dom";


function VendingMachine () {

    return (
        <div className="VendingMachine">
            <h1>Vending Machine</h1>

            <div>
                Click on a snack below for more information:
                <ul>
                    <li>
                        <Link to="/twiglets">
                            Twiglets
                        </Link>
                    </li>

                    <li>
                        <Link to="/cookies">
                            Cookies
                        </Link>
                    </li>

                    <li>
                        <Link to="/bubbly-water">
                            Bubbly Water
                        </Link>
                    </li>
                </ul>
            </div>

            <img src="https://media.giphy.com/media/CprnDw0e7u1IHOioYp/giphy.gif"/>
        </div>
    )
}


export default VendingMachine;
