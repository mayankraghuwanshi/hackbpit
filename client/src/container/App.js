import React, { Component } from 'react';
import '../assets/App.css';
import io from 'socket.io-client'

//components
import Login from "../components/login";


const {SET_USER , JOIN_GROUP} = require('../events')


const url = "http://localhost:3500"
class App extends Component {
  constructor(){
    super()
    super()
    this.state = {
      groupId : 123,
      end : false,
      socket : null,
      user : null,
      question : null,
      score : 0,
    }
    this.setUser = this.setUser.bind(this)
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
    const {socket , score , groupId} = this.state
    user.score = 0
    socket.emit(SET_USER , user)
    this.setState({user})
    //step to join users
    socket.emit(JOIN_GROUP , ({groupId , user}))

  }
  joinGroup(){
    console.log("trying to join group")
    const {socket, user} = this.state
    socket.emit(JOIN_GROUP , {groupId : 123 , user} )
  }

  render() {
    const {user} = this.state
    return (
      <div className="App">
        {!user ? <Login setUser = {this.setUser} /> :
                 <div>User is loged</div>
        }
      </div>
    );
  }
}

export default App;
