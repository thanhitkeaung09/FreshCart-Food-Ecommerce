import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Nav from "./components/Nav";
import Error from "./components/Error";
import Home from "./components/Home";

const MyComponent = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path={"/"} element={<Home/>} ></Route>
                    <Route path={"*"} element={<Error/>}> </Route>
                </Routes>
            </Router>
        </div>
    );
};

export default MyComponent;
