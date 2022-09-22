import React from "react";

class UserCard extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {

        return (
            <div className="user-card">
                <div className="user-descr">
                    <p>{this.props.user.name}</p>
                    <p>{this.props.user.email}</p>
                    <p>{this.props.user.phone}</p>
                    <p>{this.props.user.website}</p>
                </div>
                <button className="user-button">Lorem ipsum</button>
            </div>
        )
    }
}

export default UserCard;