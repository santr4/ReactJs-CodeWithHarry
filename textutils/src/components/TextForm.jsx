import React, {useState} from 'react';  


function TextForm({heading}){
    
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=> {
        setText(event.target.value);
    }
    const [text,setText] = useState('Write Here Something');
    return(
        <div>
            <div className="mb-3">
                <label forName="myText" className="form-label">{heading}</label>
                <textarea className="form-control form-control-lg" value={text} onChange={handleOnChange} id="myText" rows="10"></textarea>
                <button className="btn btn-primary my-2" onClick={handleUpClick}>Conver to UpperCase</button>
            </div>
        </div>        
    )
}

export default TextForm;