import { useState } from "react"
import Main from "./components/Main"
import Navbar from "./components/Navbar"

const App = ()=>{
  const [darkMode,setDarkMode]=useState(false)
  const handelDarkMode = ()=>{
    setDarkMode(prevState=>!prevState)
  }
  return(
    <div>
      <Navbar darkMode={darkMode} fnDark = {handelDarkMode}  />
      <Main darkMode={darkMode}/>
    </div>
  )
}
export default App