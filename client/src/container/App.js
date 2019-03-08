import React, { Component } from 'react';
import '../assets/App.css';
import io from 'socket.io-client'

//components
import Login from "../components/login";
import Login2 from "../components/login2";
import Question from "../components/question";
//helper functions
const {getData} = require('../helper')

const {SET_USER , JOIN_GROUP , UPDATE_SCORE , UPDATE_USERS} = require('../events')



const url = "http://localhost:3500"
class App extends Component {
  constructor(){
    super()
    this.state = {
      groupId : 123,
      end : false,
      socket : null,
      user : null,
      question : null,
      score : 0,
      users : 0
    }
    this.setUser = this.setUser.bind(this)
    this.changeQuestion = this.changeQuestion.bind(this)
  }
  componentWillMount() {
    this.initSocket()
  }

  initSocket(){
    const socket = io(url)
    socket.on('connect',()=>{
      console.log("connected :)")
    })
    const question = getData(0)
    this.setState({question , socket})
    socket.on(UPDATE_USERS , (users)=>{
      let len = users.length
      this.setState({users : len})
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

  changeQuestion(score , timeDifference){
    const {socket , user} = this.state
    socket.emit(UPDATE_SCORE, {user,score})
    const question = getData(timeDifference)
    this.setState({ score , question})
    this.updateScore(score)
    if(question===undefined){
      this.setState({end:true})
    }
  }

  updateScore(score){
    const {socket ,  user , groupId} = this.state
    socket.on(UPDATE_SCORE , ({user , groupId ,score }))
  }



  render() {
    const {user , question} = this.state

    return (
      <div className="App">
        {!user ? <Login2 setUser = {this.setUser} /> :this.state.end? <h1>End of question thread!</h1>:
            <Question date = {new Date}
                      score = {this.state.score}
                      question = {question}
                      changeQuestion = {this.changeQuestion}
                      end = {this.state.end}
            />
        }
      </div>
    );
  }
}

export default App;
