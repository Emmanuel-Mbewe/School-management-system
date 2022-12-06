import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';
const NavBar = () =>{
    return(
        <div className="nav">
                <h3 className = "heading">
                    Chamwabvi Community Day Secondary School
                </h3>
            <header>
                <img className = "logo" alt= "logo" src="Images/logo.png" />

            <nav>
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/announcements">Announcements</Link></li>
                    <li><Link to="/news&events">News & Events</Link></li>
                    <li><Link to="/time_tables">Exam-TimeTable</Link></li>
                    <li><Link to="/alumni">Alumni</Link></li>
                    <li><Link to="/location">Location</Link></li>
                    <li><Link to="/post">Post</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
               </header>
        </div>
        
    );
};
export default NavBar;