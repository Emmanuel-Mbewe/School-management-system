import React from 'react';
import './Footer.css';
import FacebookIcon from "@material-ui/icons/Facebook";
const Footer = () =>{
    return(
        <div className="main-footer">
            <div>
                <h3>CONTACTS</h3>
                <p>
                    email : bed-com-39-19@unima.ac.mw <br /> emmanuelmbewe180@gmail.com
                    <br />
                    <br /> <br />
                    <a className="fb" href="https://www.facebook.com/emmanuel.mbewe.355"><FacebookIcon /> facebook</a>
                    
                </p>
                <br /> <br /> <br />
                    <hr />
                <p className="copy">
                    &copy;{new Date().getFullYear()} | Exam past papers stores | All rights reserved | public
                </p>
            </div>
        </div>
    );
};
export default Footer;