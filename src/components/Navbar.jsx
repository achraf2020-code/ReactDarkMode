import logo from "../assets/react.svg"
const Navbar = (props)=>{
    return(
        <nav className={`navbar ${props.darkMode && "dark"}`}>
          <img src={logo} alt="logo" />
          <div className="mode">
          <small className=".toggler--light">Light</small>
          <label className="switch">
            <input type="checkbox" onChange={props.fnDark}/>
            <span className="slider round"></span>
          </label>
          <small className="toggler--dark">Dark</small> 
          
          </div>
        </nav>
    )
}
export default Navbar