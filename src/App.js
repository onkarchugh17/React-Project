import './App.css';
import Navbar from './components/Navbar';
import React, {useState} from 'react'
import TextForm from './components/TextForm';
import Alert from './components/Alert';




function App() {
  let [mode1 , mode2] = useState("dark")
  let [mode , newMode] = useState("light")
  let [text , newText] = useState({
    color: "black",

  })

  let [alert, setAlert] = useState(null)
  
  let showAlert = (message , type) => {
    setAlert({
      message: message, 
      type: type
    })
  }

  setInterval(() => {
    setAlert(null)
  }, 5000);


  let toggleM = () => {
    if(mode == 'light'){
     newMode("dark")
     newText({
      color: "white"
     })
     mode2("light")
     document.body.style.backgroundColor = "rgb(37, 3, 37)"
     showAlert("Dark mode is enabled" , "success")
    }

    else{
      newMode('light')
      newText({
        color: "black"
      })
      mode2("dark")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode is enabled" , "success")
      
    }
  }
  


  return (
    <>
 
<Navbar mode={mode} toggle={toggleM} c={text} nMode={mode1} />
<Alert alert={alert}/>
<TextForm newStyle={text} showAlert={showAlert} cc={mode}/>
    </>
  );
}

export default App;

