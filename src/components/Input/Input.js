import React from 'react';

const Input = (props) => {
    // console.log(props.index)
    const deleteHandler = () => {
        let i = props.index;
       
    }
    return (
        <div>
            <p onClick={deleteHandler}>hello, i'm {props.name}. I'm {props.age} years old. thank you</p>
            <input type="text" />
        </div>
    )
}
export default Input