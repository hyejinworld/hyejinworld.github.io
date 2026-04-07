import React from 'react'
import { useState } from 'react'
import './Editor.css';


const Editor = ({onCreate}) => {
    const [content, setContent] =useState("");


    const onSubmit = () =>{
        if(content ==="") return;
        onCreate(content);
        setContent("");
    }

    return (
    <div className="Editor" >
        <input type="text" placeholder='새로운 todo' value={content} 
        onChange={(e) => setContent(e.target.value)}/>    
        <button onClick={onSubmit}>추가</button>
        </div>
  )
}

export default Editor