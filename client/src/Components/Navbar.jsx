import React from "react";
import "./CSS/Navbar.css"
import { Link } from "react-router-dom";
const Navbar = () => {

    return (
        <div>
            <div className="nav">
                <div className="logoDiv">
                    <Link className="logo" to="/"> NETFLIX</Link>
                </div>
                <button className="signInBtn">
                    <Link className="signLink" to="/SignIn">Sign In</Link>
                </button>
            </div>
            <hr />
        </div>
    )
}

export default Navbar;