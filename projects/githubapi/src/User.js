import React from 'react';
import './App.css';

export default class User extends React.Component{
  render(){
  const {user} = this.props
    return ( 
      <div className="App">
        <h1> User Details..</h1>
        <p>{user.name}</p>
        <img src = {user.avatar_url}/>
      </div>
    );
  }
}

