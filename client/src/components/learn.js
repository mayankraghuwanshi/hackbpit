import React, {Component} from 'react';
import ReactPlayer from 'react-player'
import Question1 from "./question1";

class Learn extends Component {
    constructor(){
        super()
        this.state={
               questionShow : true,
                play : false
                }
                this.addQuestion = this.addQuestion.bind(this)
            }
    addQuestion(){
        let change = !this.state.questionShow
        this.setState({questionShow : change})
    }

    render() {
        return (
            <div style={{
                backgroundImage : "url('data:image/jpeg;base64,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')",
                backgroundSize : "cover",
                backgroundRepeate : "no-repeate",
                height : "100vh"
            }}>
            <div style={{display:"flex",
                flexDirection:"row" ,}}>
            <div style={{width  : "500px" ,
                height : "400px" ,
                margin : "100px 20px 20px 20px",
                border : "1px solid",
                overflow : "hidden",
                borderRadius : "20px",
            }}>
                <ReactPlayer
                    width={"500px"}
                    height={"400px"}
                    url='https://www.youtube.com/watch?v=m9dpeG2rKdY'
                    playin = {this.state.play}
                    controls={true}
                    onEnded={e=>this.addQuestion()}
                />
            </div>
                {this.state.questionShow && <Question1
                date = {new Date}
                user = {this.props.user}
                question={this.props.question}
                changeQuestion={this.props.changeQuestion}
                end={this.props.end}
            />}
            </div></div>
        );
    }
}

export default Learn;