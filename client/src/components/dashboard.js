import React, {Component} from 'react';

class Dashboard extends Component {

    render() {
        return (<div style={{margin : "100px 0 0 60px" ,overflowY : "scroll",maxHeight : "300px",backgroundColor : "#00768087" , borderRadius : "20px"}}>
                <ol className="list-group">
                {this.props.users && this.props.users.map((user)=><li className={"list-group-item"}><i
                    className="fas fa-user"></i>  {user.name+"    "+user.score}</li>)}
                </ol></div>
        );
    }
}

export default Dashboard;