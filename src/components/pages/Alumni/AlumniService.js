import React, { Component } from "react";
import './Alumni.css'
import axios from "axios";

export default class AlumniService extends Component{
    constructor(){
        super()

        this.state={
            firstName:'',
            lastName:'',
            startYear:'',
            completeYear:''
        }
    }
    handleChangeFirstName = (event) =>{
        this.setState({
            firstName:event.target.value
        })

    }

    handleChangeLastName = (event) =>{
        this.setState({
            lastName:event.target.value
        })

    }
    handleChangestartYear = (event) =>{
        this.setState({
            startYear:event.target.value
        })

    }
    handleChangeCompleteYear = (event) =>{
        this.setState({
            completeYear:event.target.value
        })

    }
    handleOnSubmit = (event) =>{
        event.preventDefault();
        axios.post("http://localhost:8080/register/alumni",this.state).then(response =>{
            console.log(
                response
            )
        })
    }
    render(){
        return(
            <div className="alumni_regidtration">
                <div className="alumni">
                    <h2>About alumni</h2>
                    <p>
                        Alumni is Mini Computers
These computers can support multiple users working simultaneously on the same
machine. These are mainly used in an organization where computers installed in
various departments are interconnected. These computers are useful for small business
organizations.
Main Frames
These computers are large and very powerful computers with very high memory
capacity. These can process huge databases such as census at extremely fast rate. They
are suitable for big organizations, banks, industries etc. and can support hundreds of
users simultaneously on the network.
Super Computers
These are fastest and very expensive computers. They can execute billions of
instructions per second. These are multiprocessor, parallel systems suitable for
specialized complex scientific applications involving huge amounts of mathematical
applications such as weather forecasting. The main difference between a supercomputer
and a mainframe is that a supercomputer executes fewer programs as fast as possible
whereas a mainframe executes many programs concurrently.
                    </p>
                </div>

                <div className="alumni">
                    <h2>Alumni activities</h2>
                    <p>
                    Mini Computers
These computers can support multiple users working simultaneously on the same
machine. These are mainly used in an organization where computers installed in
various departments are interconnected. These computers are useful for small business
organizations.
Main Frames
These computers are large and very powerful computers with very high memory
capacity. These can process huge databases such as census at extremely fast rate. They
are suitable for big organizations, banks, industries etc. and can support hundreds of
users simultaneously on the network.
Super Computers
These are fastest and very expensive computers. They can execute billions of
instructions per second. These are multiprocessor, parallel systems suitable for
specialized complex scientific applications involving huge amounts of mathematical
applications such as weather forecasting. The main difference between a supercomputer
and a mainframe is that a supercomputer executes fewer programs as fast as possible
whereas a mainframe executes many programs concurrently.
                    </p>

                </div>

                <div className="alumni">
                    <h2>Register</h2>

                    <form onSubmit={this.handleOnSubmit}>
                        <label>First Name :</label>
                        <br />
                        <input type={"text"} value={this.state.firstName} onChange={this.handleChangeFirstName}/>
                        <br />

                        <label>Last Name :</label>
                        <br />
                        <input type={"text"} value={this.state.lastName} onChange={this.handleChangeLastName}/>
                        <br />

                        <label>Started in :</label>
                        <br />
                        <select value={this.state.startYear} onChange={this.handleChangestartYear} >
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                            <option>2017</option>
                            <option>2016</option>
                            <option>2015</option>
                            <option>2014</option>
                            <option>2013</option>
                            <option>2012</option>
                            <option>2011</option>
                            <option>2010</option>
                        </select>
                        <br />
                        <label>Graduated in :</label>
                        <br />
                        <select value={this.state.completeYear} onChange={this.handleChangeCompleteYear} >
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                            <option>2017</option>
                            <option>2016</option>
                            <option>2015</option>
                            <option>2014</option>
                            <option>2013</option>
                            <option>2012</option>
                            <option>2011</option>
                            <option>2010</option>
                        </select>

                        <button className="alumni-button" type="submit">Register</button>
                    </form>

                </div>

            </div>
        )
    }
}