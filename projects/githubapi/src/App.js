import React from 'react';
import './App.css';
import Axios from 'axios';
import User from "./User"

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      user:"",
      details:[]
    }
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleClick = () =>{
    const name = this.state.user
    Axios.get(`http://api.github.com/users/${name}`)
    .then(response =>{
      console.log(response)
      this.setState({
        details:response.data
      })
    })
    .catch(error =>{
        console.log(error)
      })
  }
  render(){
    console.log(this.state.details)
    return (
      <div className="App">
        <input type = "text" name = "user" placeholder = "User Name" value = {this.state.user} 
          onChange = {(e) =>{this.handleChange(e)}}
        />
        <div>
        <button onClick = {() =>this.handleClick()}>Get Details</button>
        </div>
       <User user = {this.state.details}/>
      </div>
    );
  }
}

