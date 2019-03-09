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
        let {attempt , wrong , right,score} = this.state
        const {question , date} = this.props
        const correctAns = question.correctAns
        const options = question.options
        let timeDifferent = getTimeDif(date , d2)
        if(options[correctAns].toString()===e.target.name){
            attempt++;
            right++;
            score+=question.step
            this.setState({wrong,attempt,score,right})
            this.props.changeQuestion(timeDifferent)
        }
        else{
            attempt++;
            wrong++;
            this.setState({wrong,attempt})
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
                ,backgroundImage : "url('https://wallpaperaccess.com/full/340434.png')",
                backgroundSize : "cover",
                backgroundRepeate : "no-repeate",
                position : "relative",
                zIndex : "1"
            }}>
                {(this.state.attempt<5) ? <div><h2>Hey {this.props.user.name}</h2>
                <hr/>
                <h1 >{question.content}</h1>
                    {question.url && <img align="right" src={"https://www.mathgoodies.com/sites/default/files/lesson_images/circle_examples.gif"}/>}
                <button value={"btn0"} name = {opt[0]} onClick={this.ans.bind(this)} type="button" className="btn btn-light m-4">{opt[0]}</button>
                <button value={"btn1"} name = {opt[1]} onClick={this.ans.bind(this)} type="button" className="btn btn-light m-4">{opt[1]}</button>
                <button value={"btn2"} name = {opt[2]} onClick={this.ans.bind(this)} type="button" className="btn btn-light m-4">{opt[2]}</button>
                <button value={"btn3"} name = {opt[3]} onClick={this.ans.bind(this)} type="button" className="btn btn-light m-4">{opt[3]}</button>
                <hr/>
                <p align="center"><small align = "center">Score : <b>{this.state.score}</b>   Attempt : <b>{this.state.attempt}</b>   Right : <b>{this.state.right}</b>   wrong : <b>{this.state.wrong}  level : {question.type}</b></small>
                </p></div>:
                    <div>
                        <h2 align="center" style={{marginTop : "90px"}}>Your score is {this.state.score}, you have attempted { this.state.attempt } out of which {this.state.right } is <b>right</b>
                        and {this.state.wrong} is <b>wrong!</b></h2>
                    </div>


                }
            </div>
        );
    }
}

export default Question1;