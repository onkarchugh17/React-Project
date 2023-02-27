import React, { useState } from 'react'

export default function TextForm(props) {
    
    const[text , editText] = useState("")
    const upper = () => {
        let newText = text.toUpperCase();
        editText(newText);
        props.showAlert("All character now in upper case" , "Success")
    }
    const lower = () => {
        let newText = text.toLowerCase();
        editText(newText);
        props.showAlert("All character now in lower case" , "Success")
    }

    const copy = () => {
       let myBox = document.getElementById("myBox")
        myBox.select();
        navigator.clipboard.writeText(myBox.value);
        props.showAlert("Text Copied" , "Success")
    }

    const clear = () => {
        let newText = ""
        editText(newText);
        props.showAlert("Input is now clear" , "Success")
    }

    let handleChange = (event) => {
        console.log("change")
        editText(event.target.value)
    }

    return (


        <>
            <div className="mb-3 container">
                <label htmlFor="exampleFormControlTextarea1" className="form-label" style={props.newStyle}><h1>Enter Your Text Below :</h1></label>
                <textarea id="myBox" style={{backgroundColor: props.cc==='light'?'white':'black' , color: props.cc==='light'?'black':'white'}} className="form-control" value={text}  onChange={handleChange} rows="7" placeholder='Enter Text Here'></textarea>
                <button style={{margin:"9px"}} onClick={upper} type="button" className="btn btn-primary mx-1 mb-9">Upper Case</button>
                <button onClick={lower} type="button" className="btn btn-success mx-1 mb-9">Lower Case</button>
                <button onClick={copy} type="button" className="btn btn-danger mx-1 mb-9">Copy text</button>
                <button onClick={clear} type="button" className="btn btn-warning mx-1 mb-9">Clear</button>

            </div>
            <br/>
            <h3 style={props.newStyle} className='container'>Text Summary : {text.length} <span>words</span> & {text.split(" ").length} characters</h3>
            <br/>
            <hr style={props.newStyle}/>

            <h3 style={props.newStyle} className='container'>Preview: </h3> <p className='container' style={props.newStyle}>{text}</p>
        </>
    )
}
