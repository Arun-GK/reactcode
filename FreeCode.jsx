import React, { useState } from 'react';

export default function FreeCode() {
    const [text, setText] = useState("hi aru ");
    const handleChange = () => {
        if (text === "hi arun")
            setText("hi kamini");
        else
            setText('hi earth')
    }
    const handlere=()=>{
        window.location.reload(false)
    }
    return (
        <div>
            <h1>{text}</h1>
            <button onClick={handleChange} className="btn btn-primary">change</button>
            <button onClick={handlere}>refresh</button>
        </div>
    )
}

