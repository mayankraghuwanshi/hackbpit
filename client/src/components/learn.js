import React, {Component} from 'react';
import ReactPlayer from 'react-player'
import Question from "./question2";

class Learn extends Component {
    constructor(){
        super()
        this.state={
               questionShow : false
                }
                this.addQuestion = this.addQuestion.bind(this)
            }
    addQuestion(){
        let change = !this.state.questionShow
        this.setState({questionShow : change})
    }

    render() {
        return (
            <div style={{display:"flex", flexDirection:"row"}}>
            <div style={{width  : "500px" ,
                height : "400px" ,
                margin : "20px",
                border : "1px solid",
                overflow : "hidden",
                borderRadius : "20px",
            }}>
                <ReactPlayer
                    width={"500px"}
                    height={"400px"}
                    url='https://www.youtube.com/watch?v=_q1R5Qlfp-M&list=RD_q1R5Qlfp-M&start_radio=1'
                    playin
                    controls={true}
                    onEnded={e=>this.addQuestion()}
                />
            </div><Question
                user = {this.props.user}
                score={this.props.score}
                question={this.props.question}
                changeQuestion={this.props.changeQuestion}
                end={this.props.end}
            /></div>
        );
    }
}

export default Learn;