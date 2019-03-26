import React from 'react'

const UserOutput = (props) => {
    return (
        <div>
            <p>Paragraph 1</p>
            <p>{props.username}</p>
        </div>
    )
}

export default UserOutput;