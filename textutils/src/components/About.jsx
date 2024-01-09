import React, {useState} from 'react';

function About({heading}){

    const [myStyle,setMyStyle] = useState(
        {
            color : 'white',
            backgroundColor : 'black',
            border : '3px solid white'
        }
    )
    const [btnText,setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = ()=> {
        if(myStyle.color == 'white'){
            setMyStyle(
                {
                    color : 'black',
                    backgroundColor : 'white'
                }
            )
            setBtnText("Enable Dark Mode")
        }
        else{
            setMyStyle(
                {
                    color : 'white',
                    backgroundColor : 'black'
                }
            )
            setBtnText("Enable White Mode")
        }
    }

    return(
        <div className="container">
            <h1>{heading}</h1>
            <div className="accordion my-2" style={myStyle} id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Word Counter 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Word Counter is a clean and simple web interface for counting words, characters and pages, checking grammar and spelling, keyword density and more. Why? At Wasai we are committed to building awesome digital products for all.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Functionalities
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        To convert the text to lower, upper, clear, and trim.
      </div>
    </div>
  </div>
</div>
        <br/>
        <div className="container my-2">
            <button type="button" className="btn btn-danger" onClick={toggleStyle}>{btnText}</button>
        </div>
        </div>
        
    )
}

export default About;