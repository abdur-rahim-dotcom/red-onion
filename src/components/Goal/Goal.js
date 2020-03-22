import React from 'react';
import './Goal.css'
const Goal = (props) => {

    return (
        <div>
            {props.myGoal.map(specs => <li key={specs.id}>{specs.title}</li>)}
        </div>
    )
}
export default Goal;