import React from 'react';

export default function TextForm(){
    return(
        <div>
            <div className="mb-3">
                <label for="myText" className="form-label">Write Your Text Here!</label>
                <textarea className="form-control form-control-lg" id="myText" rows="3"></textarea>
            </div>
        </div>        
    )
}