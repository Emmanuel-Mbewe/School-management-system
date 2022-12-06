import React from "react";
import HomeService from "./HomeService";

const Home = () =>{
    return(
       <div>
           <HomeService />
           <div className="main-footer">
            <div className="footer-div">
                <h3>This is footer</h3>
            </div>
            <div className="footer-div">
                <h3>This is footer</h3> 
            </div>
            <div className="footer-div">
                <h3>This is footer</h3>
            </div>
        </div>
       </div>
    );
};
export default Home;