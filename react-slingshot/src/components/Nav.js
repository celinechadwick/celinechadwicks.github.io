import React from "react";
import Contact from './Contact';
import Bio from './Bio';
import Portfolio from './Portfolio';
import Skills from './Skills';
const navStyle = {opacity: '.85'};

import {Navbar, NavItem} from "react-materialize";
const Nav = React.createClass({
  render() {
    return (
      <div>
        <Navbar className='black white-text' fixed style={navStyle}>
          <NavItem className='left' href='#bio'><h5>Celine Chadwick</h5></NavItem>
           <NavItem className='right' href='#contact'>Contact Me</NavItem>
  	       <NavItem className='right' href='#portfolio'>Portfolio</NavItem>
           <NavItem className='right' href='#skills'>Skills</NavItem>
        </Navbar>
      </div>

    )
  }

})



export default Nav
