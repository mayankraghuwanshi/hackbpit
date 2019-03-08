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
    onValidate(){
        const {name} = this.state
        if(name.length!==0){
            let user = {
                id : uuidv4(),
                name : name
            }
            this.props.setUser(user)
        }
        else{
            this.setState({error : "Please give name!"})
        }
    }

    render() {
        return (
            <div>
                <input value = {this.state.name} name = "name" onChange={this.onChange.bind(this)}/>
                <button onClick={this.onValidate.bind(this)}>Reg</button>
            </div>
        );
    }
}





export default Login;