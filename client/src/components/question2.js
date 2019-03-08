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
            <div className="animated fadeIn" style={{width : "800px" , height : "300px" , margin : "100px 0 0 20px" , padding : "30px" , backgroundColor : "#00768087" , borderRadius : "20px"}}>
                <h1 >{question.content}</h1>
                <button name = {opt[0]} onClick={this.ans.bind(this)} type="button" className="btn btn-light m-2">{opt[0]}</button>
                <button name = {opt[1]} onClick={this.ans.bind(this)} type="button" className="btn btn-light m-2">{opt[1]}</button>
                <button name = {opt[2]} onClick={this.ans.bind(this)} type="button" className="btn btn-light m-2">{opt[2]}</button>
                <button name = {opt[3]} onClick={this.ans.bind(this)} type="button" className="btn btn-light m-2">{opt[3]}</button>
            </div>
        );
    }
}

export default Question;