import React, {Component} from 'react'

export default class Users extends Component {
    constructor(props) {
        super(props)
    
    }
    render() {
       let users = this.props.users.map((user, index) => {
            return (
                <div style={{display: 'inline-block'}} key={index + user.name}>
                    <h2>{`${user.name.first} ${user.name.last}`}</h2>
                    <img src={user.picture} alt='faceless' />
                    <p>{user.email}</p>
                </div>
            )
        })
        return (
            <div>{users}</div>
        )
    }
}

