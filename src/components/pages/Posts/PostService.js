import React, { Component } from "react";
import axios from 'axios'
import './Post.css'


export default class PostService extends Component{
    constructor(){
        super()
            this.state={
                title:'',
                post:''
            }
    }
    handleOnChangeTitle = (event) =>{
        this.setState({
            title:event.target.value
        })
    }
    handleOnChangePost = (event) =>{
        this.setState({
            post:event.target.value
        })
    }
    handleOnChangeFormData = (event) =>{
        
        event.preventDefault();
        axios.post("http://localhost:8080/api/v1/post",this.state).then(response =>{
            console.log(
                response
            )
        })
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleOnChangeFormData}>
                    <div className="form_data">
                        <h1>
                            <label id="title">TITLE</label>
                        </h1>
                        <br />
                        <input className="data" type={"text"} value={this.state.title} onChange={this.handleOnChangeTitle} />
                    </div>
                    <div className="form_data">
                        <label id="post">Write a Post</label> <br />
                        <textarea value={this.state.post} onChange={this.handleOnChangePost}>

                        </textarea>
                    </div>
                    <div>
                        <button type="submit">Post</button>
                    </div>

                </form>
            </div>
        )
    }

}
