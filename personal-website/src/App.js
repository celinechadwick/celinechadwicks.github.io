import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Skills from './components/Skills'

const App = React.createClass({
render() {
  return (
    <div>
      <Nav />
      <Bio />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  )
}
})

export default App;
