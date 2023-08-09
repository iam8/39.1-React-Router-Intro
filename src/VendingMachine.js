import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";


function VendingMachine () {

    return (
        <div className="VendingMachine">
            <h1>Vending Machine Overlord</h1>

            <div className="VendingMachine-content">
                Click on a snack below or use the nav bar for more information:
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

                <img src="https://media.giphy.com/media/CprnDw0e7u1IHOioYp/giphy.gif"/>
            </div>

        </div>
    )
}


export default VendingMachine;
