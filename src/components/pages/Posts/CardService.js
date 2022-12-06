import React, { Component } from "react";
import './Card.css'

export default class CardService extends Component{
    render(){
        return(
            <div className="card">
                <div className="innerCard">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.post}</p>
                </div>
                <button className="btn" type="submit">Read more</button>
            </div>
        )
    }
}