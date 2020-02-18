import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export default class Navbar extends React.Component{
    constructor(props){
        super(props);
        
    }
           
    render(){
        return(
            <div>
                <nav className="navbar shadow  navbar-light bg-light">
                    <a className="navbar" href="#" style = {{color:"brown",marginLeft:"100px"}}><h3><i>Video Info</i></h3></a>
                    <Link to = "/create" className = "navbar">Create</Link>
                    <Link to = "/login" className = "navbar">Login</Link>
                    <Link to = "/logout" className = "navbar">Logout</Link>
                </nav>
            </div>
        )
    }
}