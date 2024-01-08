import React, {useState} from 'react';  


function TextForm({heading}){
    
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=> {
        setText(event.target.value);
    }
    const handleLoClick = ()=> {
        let newText1 = text.toLowerCase();
        setText(newText1);
    }
    const handleClearClick = ()=> {
        let newText2 = '';
        setText(newText2);
    }
    const [text,setText] = useState('Write Here Something');
    return(
        <>
            <div className="container mb-3">
                <h1>{heading}</h1>
                <textarea className="form-control form-control-lg" value={text} onChange={handleOnChange} id="myText" rows="10"></textarea>
                <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-2">
                <h1>Text Summary</h1>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.004 * text.split(" ").length} Minutes Read</p>
                <p>{60 * 0.004 * text.split(" ").length} Seconds Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>        
    )
}

export default TextForm;