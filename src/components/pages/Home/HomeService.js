import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
const HomeService = () =>{
    return(
        <div className="home-container">
            <div className="home" id="first">
                <h2 className="inf-link">Info & Quick links</h2>
                <p>
                    <ul>
                        <li id="link-cus"><Link to="/staff">Staff</Link></li>
                        <li id="link-cus"><Link to="/pass_list">MANEB pass List</Link></li>
                        <li id="link-cus"><Link to="/map">Map</Link></li>
                        <li id="link-cus"><Link to="/departments">Departments</Link></li>
                        <li id="link-cus"><Link to="/students">Students</Link></li>
                        <li id="link-cus"><Link to="/alumni">Alumni Registration</Link></li>
                        <li id="link-cus"><Link to="/community">Community</Link></li>
                    </ul>
                </p>
            </div>

            <div className="home" id="second">
                <h1 className="welcoming-message">Welcome to Chamwabvi Community Day Secondary School</h1>
               {/* <img src="/Images/background.jpg" /> */}
                <div>

                </div>
            </div>
        </div>
    );
};
export default HomeService;