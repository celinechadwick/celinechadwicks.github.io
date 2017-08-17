import React from "react";
const navStyle = {opacity: '.75', 'font-family': 'Futura', 'font-size':'4vw', 'color':'red', 'letter-spacing': '-1.0px'};
const linkStyle = {opacity: '.75', 'font-family': 'Futura', 'font-size':'2vw', 'letter-spacing': '1px'};
const Nav = React.createClass({
  render() {
    return (
  <div style={navStyle}>
  <div className="navbar-fixed grey flow-text">
   <nav>
     <div className="nav-wrapper grey">
       <a href="#bio" className="brand-logo left" style={navStyle}>Celine Chadwick</a>
       <ul className="right">
         <li><a href="#contact" style={linkStyle}>Contact</a></li>
         <li><a href="#portfolio" style={linkStyle}>Portfolio</a></li>
         <li><a href="#skills" style={linkStyle}>Skills</a></li>
       </ul>
     </div>
   </nav>
 </div>
      </div>

    )
  }

})



export default Nav
