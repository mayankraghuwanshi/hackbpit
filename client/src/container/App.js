import React, { Component } from 'react';
import '../assets/App.css';
import io from 'socket.io-client'

//components
//import Login from "../components/login";
import Login2 from "../components/login2";
//import Question from "../components/question";
import Question2 from "../components/question2";
import Dashboard from "../components/dashboard";
import Learn from "../components/learn";
//helper functions
const {getData} = require('../helper')
const {getData2} = require('../helper2')

const {SET_USER , JOIN_GROUP , UPDATE_SCORE , UPDATE_USERS} = require('../events')



const url = "http://localhost:3500"
class App extends Component {
  constructor(){
    super()
    this.state = {
      learning : true,
      groupId : 123,
      end : false,
      socket : null,
      user : null,
      question : null,
      score : 0,
      users : 0,
      question2 : null
    }
    this.setUser = this.setUser.bind(this)
    this.changeQuestion = this.changeQuestion.bind(this)
    this.changeQuestion2 = this.changeQuestion2.bind(this)
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
    const question2 = getData2(0)
    this.setState({question, question2, socket})
    socket.on(UPDATE_USERS , (users)=>{
      this.setState({users})
    })
  }


  setUser = ({user , flag})=>{
    const {socket , score , groupId ,learning} = this.state
    user.score = 0
    socket.emit(SET_USER , user)
    this.setState({user , learning:flag})
    //step to join users
    socket.emit(JOIN_GROUP , ({groupId , user}))

  }
  joinGroup(){
    console.log("trying to join group")
    const {socket, user} = this.state
    socket.emit(JOIN_GROUP , {groupId : 123 , user} )
  }

  changeQuestion(score , timeDifference){
    const {socket , user , groupId} = this.state
    socket.emit(UPDATE_SCORE, {groupId ,user,score})
    const question = getData(timeDifference)
    this.setState({ score , question})
    if(question===undefined){
      this.setState({end:true})
    }
  }
  changeQuestion2(timeDifference){
    const question2 = getData2(timeDifference)
    this.setState({ question2})
    if(question2===undefined){
      this.setState({end:true})
    }
  }




  render() {
    const {user , question , question2,learning} = this.state
     if(!user){
       return <Login2 setUser={this.setUser}/>
     }
     else if(learning){
       return <div>{this.state.end ? <h1>End of question thread!</h1> :<Learn
           user = {this.state.user}
           question={question2}
           changeQuestion={this.changeQuestion2}
           end={this.state.end}
       />}</div>
     }
     else
    return (
      <div  style={{
        backgroundImage : "url('https://wallpaperaccess.com/full/340434.png')",
        backgroundSize : "cover",
        backgroundRepeate : "no-repeate",
        height : "100vh"
      }}>
        {!user ? <Login2 setUser={this.setUser}/> : this.state.end ? <h1>End of question thread!</h1> :
            <div style={{display:"flex", flexDirection:"row"}}><Question2 date={new Date}
                            user = {this.state.user}
                            score={this.state.score}
                            question={question}
                            changeQuestion={this.changeQuestion}
                            end={this.state.end}
            />
            < Dashboard style={{width : "300px"}} users = {this.state.users}   /></div>
        }
      </div>
    )
  }
}

export default App;
