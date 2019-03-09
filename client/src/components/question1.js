import React, {Component} from 'react';
const {getData , getTimeDif} = require('../helper')



class Question1 extends Component {
    constructor(){
        super()
        this.state = {
            attempt : 0,
            wrong : 0,
            right : 0,
            score : 0
        }
    }


    ans(e,val){
        let d2 = new Date
        let {attempt , wrong , right} = this.state
        const {question , date} = this.props
        const correctAns = question.correctAns
        const options = question.options
        let timeDifferent = getTimeDif(date , d2)
        if(options[correctAns].toString()===e.target.name){

            this.props.changeQuestion(timeDifferent)
        }
    }
    render() {

        const {question} = this.props
        const opt = question.options
        return (
            <div className="animated fadeIn shadow" style={{width : "800px"
                , minHeight : "400px"
                , margin : "100px 0 0 20px"
                , padding : "30px"
                , backgroundColor : "#00768087"
                , borderRadius : "20px"
                ,backgroundImage : "url('http://www.techandall.com/wp-content/uploads/2013/10/techandall_wallpaper_1.jpg')",
                backgroundSize : "cover",
                backgroundRepeate : "no-repeate",
                position : "relative",
                zIndex : "1"
            }}>
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

export default Question1;