import React, {useState } from "react";
function TextForm(props) {
    const ConvertToUpperCase = ()=>{
       // console.log("ConvertToUpperCase button clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const HandleOnChange = (event)=>{
        //console.log("HandleOnChange ");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter Text here');
    return (
        <div>
            <div className="TextForm">
                <div className="container">


                        <div className="form-group mb-3">
                            <h1>{props.heading}</h1>
                            <textarea className="form-control" value={text} onChange={HandleOnChange} id="myBox" rows="8" ></textarea>

                        </div>


                        <button type="submit" className="btn btn-primary" onClick={ConvertToUpperCase}>Convert to Uppercase</button>
           

                </div>
            </div>

        </div>
    )
}

export default TextForm;