import React, { Component } from 'react';
import '../assets/App.css';
import io from 'socket.io-client'

//components
import Login from "../components/login";


const {SET_USER} = require('../events')


const url = "http://localhost:3500"
class App extends Component {
  constructor(){
    super()
    this.state = {
      socket : null,
      user : null
    }
  }
  componentWillMount() {
    this.initSocket()
  }

  initSocket(){
    const socket = io(url)
    socket.on('connect',()=>{
      console.log("connected :)")
      this.setState({socket})
    })
  }

  setUser = (user)=>{
    const {socket , score} = this.state
    user.score = 0
    socket.emit(SET_USER , user)
    this.setState({user})

  }

  render() {
    const {user} = this.state
    return (
      <div className="App">
        {!user ? <Login setUser = {this.setUser.bind(this)} /> :
                 <div>User is loged</div>
        }
      </div>
    );
  }
}

export default App;
