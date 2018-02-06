import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Users from './Users.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
    this.getUsers = this.getUsers.bind(this);
  }
  getUsers() {
    let promise = axios.get('http://192.168.3.98:3003/api/getUsers')
    promise.then((res) => 
      { this.setState({ users: res.data }); 
      console.log(this.state.users);
    })
  }


  render() {
    return (
      <div className="App">
        <h1>USERS</h1>
        <button onClick={this.getUsers}>get users</button>

        <Users users={this.state.users}/>
      </div>
    );
  }
}

export default App;
