import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Twiglets from "./Twiglets";
import Cookies from "./Cookies";
import BubblyWater from "./BubblyWater";
import './App.css';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route exact path="/">
                    <VendingMachine />
                </Route>
                <Route exact path="/twiglets">
                    <Twiglets />
                </Route>
                <Route exact path="/cookies">
                    <Cookies />
                </Route>
                <Route exact path="/bubbly-water">
                    <BubblyWater />
                </Route>
            </BrowserRouter>
        </div>
    );
}


export default App;
