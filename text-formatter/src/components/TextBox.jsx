import React, { useState } from 'react';
import Button from './Button';
import './style.css';

const TextBox = () => {
    const [text, setText] = useState('');

    const copy = () => {
        var text = document.getElementById("txtBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
    };

    return (
        <>
         <div className='container'>
                <Button text="UpperCase" function={() => setText(text.toUpperCase())} />
                <Button text="LowerCase" function={() => setText(text.toLowerCase())} />
                <Button text="Copy" function={copy} />
                <Button text="Clear" function={() => setText('')} />
                <Button text="Remove Whitespaces" function={() => setText(text.split(/[ ]+/).join(" "))} />
            </div>
            <textarea cols="40" rows="10" value={text} onChange={(e) => setText(e.target.value)} id="txtBox"></textarea>
            <div className="previewbox">
                <h1 style={{ color: "#37b8bd" }}>Preview Box</h1>
                <p>{text.length > 0 ? text : "Please enter your text"}</p>
            </div>
            <div className="summary">
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words</p>
                <p>{text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </p>
            </div>
        </>
    );
};

export default TextBox;