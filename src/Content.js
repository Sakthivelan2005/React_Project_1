import React, { useState } from 'react'
import './Content.css'
import colorNames from 'colornames';

const Content = () => {
    const [text,setText] = useState('Empty value');
    const UpdateText =(text) =>{
         setText(text);
    }
   
    const [Color,ChangeColor] = useState('Black');
    const ToggleColor = () =>{
        ChangeColor(Color => (Color === 'Black')? 'White' : 'Black')
    }

  return (
    <main>  
      <div className='content'>  
    <input type="textbox" style={{color: `${Color}`,backgroundColor:`${text}`}} value= {`${text}  \n ${colorNames(text)}`} onChange={setText}/>
    </div>
    <div className='content'>  
    <input type="text"  onChange={(e)=>UpdateText(e.target.value)}/>
    </div>
    <div className='content'>  
    <button onClick={() =>ToggleColor()}> Toggle Color</button>
    </div>
    </main>
  )
}

export default Content