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
                <div style={{width : "500px" , margin : "190px auto" , display : "block", border : "2px solid"}} className="text-center border border-light p-5">
                    <input value = {this.state.name} name = "name" onChange={this.onChange.bind(this)}  type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Name"/>
                    <input value = "Math"  disabled={true} className="form-control mb-4" placeholder="Maths"/>

                    <button className="btn btn-info btn-block" onClick={this.onValidate.bind(this)} type="submit">Enter</button>
                </div>
            </div>
        );
    }
}





export default Login;