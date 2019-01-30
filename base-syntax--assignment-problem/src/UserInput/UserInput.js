import React from 'react'
import './UserInput.css'

const UserInput = (props) => {
    return (
        <input className="usrInput" type="text" onChange={props.changed} value={props.username} />
    )
}

export default UserInput;