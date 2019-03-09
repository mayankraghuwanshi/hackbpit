import React, {Component} from 'react';
const {getData , getTimeDif} = require('../helper')



class Question extends Component {
    constructor(){
        super()
        this.state = {
            attempt : 0,
            wrong : 0,
            right : 0
        }
    }


    ans(e,val){
        let d2 = new Date
        let {attempt , wrong , right} = this.state
        const {question,date} = this.props
        let {score} = this.props
        const options = question.options
        const correctAns = question.correctAns
        let timeDifferent = getTimeDif(date , d2)
        if(options[correctAns].toString()===e.target.name){
            attempt++;
            right++;
            this.setState({attempt,right})
            score+=question.step
            console.log(score+"    "+timeDifferent)
            this.props.changeQuestion(score , timeDifferent)


        }
        else{
            wrong++;
            attempt++;
            this.setState({wrong , attempt})
            this.props.changeQuestion(score , timeDifferent)
        }
    }
    check(){
        let d2 = new Date
        let d1 = this.props.date
        console.log(getTimeDif(d1,d2))
    }
    render() {
        const {question} = this.props
        const opt = question.options
        return (
            <div className="animated fadeIn shadow" style={{width : "800px"
                , minHeight : "300px"
                , margin : "100px 0 0 20px"
                , padding : "30px"
                , backgroundColor : "#00768087"
                , borderRadius : "20px"
                ,backgroundImage : "url('https://wallpaperaccess.com/full/340434.png')",
                backgroundSize : "cover",
                backgroundRepeate : "no-repeate",
                position : "relative",
                zIndex : "1"
            }}

            >
                <h2>Hey {this.props.user.name}</h2>
                <hr/>
                <h1 >{question.content}</h1>
                <small>{question.type}</small>
                <button value={"btn0"} name = {opt[0]} onClick={this.ans.bind(this)} type="button" className="btn btn-light m-4">{opt[0]}</button>
                <button value={"btn1"} name = {opt[1]} onClick={this.ans.bind(this)} type="button" className="btn btn-light m-4">{opt[1]}</button>
                <button value={"btn2"} name = {opt[2]} onClick={this.ans.bind(this)} type="button" className="btn btn-light m-4">{opt[2]}</button>
                <button value={"btn3"} name = {opt[3]} onClick={this.ans.bind(this)} type="button" className="btn btn-light m-4">{opt[3]}</button>
                <hr/>

                <p align="center"><small align = "center">Score : <b>{this.props.score}</b>   Attempt : <b>{this.state.attempt}</b>   Right : <b>{this.state.right}</b>   wrong : <b>{this.state.wrong}</b></small>
                </p>
            </div>
        );
    }
}

export default Question;