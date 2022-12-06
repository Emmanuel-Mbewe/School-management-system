import React, { Component } from "react";
import axios from "axios";
import './Announcements.css'
import '../Posts/Card.css'
import CardService from "../Posts/CardService";

export default class AnnoucementsService extends Component{
    constructor(props){
        super(props)
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:8080/api/v1/post").then(response =>{
            console.log(response)
            this.setState({
                posts:response.data
            })
        })

    }
    render(){
        const {posts} = this.state
        return(
            <div className="post_content">
                <h2 className="announcements">
                    Announcements
                </h2>
                <div className="post" id="one">
                    
                </div>

                <div className="post" id="two">
                    <p className="post-body">
                        {
                            posts.map(d =>
                                <div  key={d.id}>
                                {/* <hr />     */}
                                 <span className="title"> 
                                    <h3 className="post_title">
                                       <CardService title= {d.title} post = {d.post} />
                                    </h3> 
                                </span> 
                                    <br /> 
                                {/* <span className="post_body">
                                    <p> 
                                        {d.post}
                                    </p>
                                </span> */}

                                </div>)
                        }
                    </p>
                </div>

                <div className="post" id="three">

                </div>
                                            
            </div>
        )
    }
}