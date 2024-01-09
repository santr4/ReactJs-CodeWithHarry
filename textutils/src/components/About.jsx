import React from 'react';

function About(){
    return(
        <div className="container">
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Word Counter 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Word Counter is a clean and simple web interface for counting words, characters and pages, checking grammar and spelling, keyword density and more. Why? At Wasai we are committed to building awesome digital products for all.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Functionalities
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        To convert the text to lower, upper, clear, and trim.
      </div>
    </div>
  </div>
</div>
        <br/>
        </div>
        
    )
}

export default About;