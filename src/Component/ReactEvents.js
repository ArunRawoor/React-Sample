import React, { useState } from 'react'

function ReactEvents() {
     const [inputValue, setInputValue] = useState('');
     const [hovered, setHovered] = useState('');


     const handelClick = () => {
        alert('Button is Clicked!')
     }

     const  handleSubmit = (event)  => {
        event.preventDefault(); // this is for wen the form got submitted it will cleare the field 
        alert('The Form Got Submitted')
     }

     const handelChange = (event) => {
       setInputValue(event.target.value);
     }

     const handelMouseOver = () => {
        setHovered(true);
     }

     const handelMouseOverOut = () => {
        setHovered(false);
     }
  return (
    <div>
        <button onClick={handelClick}>I am Button</button>
         
         <br />

         <input type='text' placeholder='Enter your name' value={inputValue} onChange={handelChange} />

         <br />
         <br />
         
        <form onSubmit={handleSubmit}>
            <input type='text'  placeholder='Enter your pass'/>
            <button type='submit' >Submit</button>
        </form>
        <br />
        <div

            onMouseOver={handelMouseOver}
            onMouseOut={handelMouseOverOut}
            style={{padding: '20px',backgroundColor: hovered ? 'blue' :'white' }}
        >
            Hover Me
        </div>
    </div>
  )
}

export default ReactEvents







