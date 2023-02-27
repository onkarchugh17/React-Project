import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import TextForm from './components/TextForm';
import Alert from './components/Alert';


import {
  BrowserRouter as Router,
 
  Routes,
  Route,
  
} from "react-router-dom";
import About from './components/About';




function App() {
  let [mode1, mode2] = useState("dark")
  let [mode, newMode] = useState("light")
  let [text, newText] = useState({
    color: "black",

  })

  let [alert, setAlert] = useState(null)

  let showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
  }

  setTimeout(() => {
    setAlert(null)
  }, 5000);


  let toggleM = () => {
    if (mode == 'light') {
      newMode("dark")
      newText({
        color: "white"
      })
      mode2("light")
      document.body.style.backgroundColor = "rgb(37, 3, 37)"
      showAlert("Dark mode is enabled", "success")
    }

    else {
      newMode('light')
      newText({
        color: "black"
      })
      mode2("dark")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode is enabled", "success")

    }
  }



  return (
    <>

      
      <Alert alert={alert} />
      <Router>
      <Navbar mode={mode} toggle={toggleM} c={text} nMode={mode1} />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route exact path="/" element={<TextForm newStyle={text} showAlert={showAlert} cc={mode} />}></Route>
      </Routes>
      </Router>
      
     
     
     
    </>
  );
}

export default App;

