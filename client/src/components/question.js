import React, {Component} from 'react';
const {getData , getTimeDif} = require('../helper')


class Question extends Component {

    ans(e,val){
        let d2 = new Date
        const {question} = this.props
        const options = question.options
        const correctAns = question.correctAns
        if(options[correctAns].toString()===e.target.name){
            const {date} = this.props
            let timeDifferent = getTimeDif(date , d2)
            //console.log(timeDifferent)
            let {score} = this.props
            score+=question.step
            console.log(score+"    "+timeDifferent)
            this.props.changeQuestion(score , timeDifferent)


        }
        else{
            console.log("wrong click")
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
            <div>
                <h1 >{question.content}</h1>
                <small>{question.type}</small><br/>
                <button name = {opt[0]}  onClick={this.ans.bind(this)}>{opt[0]}</button>
                <button name = {opt[1]} onClick={this.ans.bind(this)}>{opt[1]}</button>
                <button name={opt[2]} onClick={this.ans.bind(this)}>{opt[2]}</button>
                <button name = {opt[3]} onClick={this.ans.bind(this)}>{opt[3]}</button>
                <button onClick={this.check.bind(this)}>submit</button>
            </div>
        );
    }
}

export default Question;