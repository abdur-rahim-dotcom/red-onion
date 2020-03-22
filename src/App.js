import React, { useState } from 'react';
import './App.css'
import Input from './components/Input/Input';

const App = () => {
  const [show, setShow] = useState({ showContent: false })
  const persons =
    [{ name: 'ratam', age: 23, id: 1 },
    { name: 'sawmen', age: 32, id: 2 },
    { name: 'sarwar', age: 34, id: 3 }]
  const showContentHandler = () => {
    const doesShow = show.showContent;
    setShow({ showContent: !doesShow })
  }
  const personName = [...persons]

  return (
    <div className='App'>
      <h1>i am trying to toggle something</h1>
      <h3>let's see</h3>
      <button onClick={showContentHandler}>switch</button>
      {show.showContent ?
        persons.map((specs, index) => <Input
          name={specs.name}
          index={index}
          age={specs.age}
          key={specs.id}
        ></Input>)
        : null
      }
    </div>
  )
}
export default App;