import React from 'react';

const validationComponent = (props) => {
    return (
        <div>
            <p>{props.len}</p>
            {
                props.len < 5 ?
                    <p>Text too short</p> :
                    <p>Text long enough</p>
            }
        </div>
    )
}

export default validationComponent;