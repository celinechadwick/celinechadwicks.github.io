import React from "react";
import Nav from './Nav';
import Portfolio from './Portfolio';
import Bio from './Bio';
import Contact from './Contact';
import Skills from './Skills'

const style={'font-family': 'Georgia', 'font-weight':'600'}

const Index = React.createClass({
render() {
  return (
    <div className='grey lighten-2' style={style}>
      <Nav />
      <Bio />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  )
}





})

export default Index
