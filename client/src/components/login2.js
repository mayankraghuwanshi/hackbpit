import React, {Component} from 'react';
import uuidv4 from 'uuid/v4'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            name : "",
            error : ''
        }
    }
    onChange(e){
        this.setState({[e.target.name] : e.target.value})
    }
    onValidate1(){
        const {name} = this.state
        if(name.length!==0){
            let user = {
                id : uuidv4(),
                name : name
            }
            //don't set flag to learning
            this.props.setUser({user , flag : true})
        }
        else{
            this.setState({error : "Please give name!"})
        }
    }
    onValidate2(){
        const {name} = this.state
        if(name.length!==0){
            let user = {
                id : uuidv4(),
                name : name
            }
            this.props.setUser({user , flag : false})
        }
        else{
            this.setState({error : "Please give name!"})
        }
    }

    render() {
        return (
            <div>
                <div style={{width : "500px" ,
                    margin : "190px auto" ,
                    display : "block",
                    border : "2px solid",
                    backgroundImage : "url('https://wallpaperaccess.com/full/340434.png')",
                    backgroundSize : "cover",
                    backgroundRepeate : "no-repeate",
                    borderRadius : "20px"
                }} className="text-center border border-light p-5">
                    <input value = {this.state.name} name = "name" onChange={this.onChange.bind(this)}  type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Name"/>
                    <input value = "Math"  disabled={true} className="form-control mb-4" placeholder="Maths"/>
                    <div className={"row"}>
                        <div className={"col"}><button className="btn btn-info btn-block" onClick={this.onValidate1.bind(this)} type="submit">Learn</button></div>
                        <div className={"col"}><button className="btn btn-info btn-block" onClick={this.onValidate2.bind(this)} type="submit">Test</button></div>
                    </div></div>
            </div>
        );
    }
}





export default Login;