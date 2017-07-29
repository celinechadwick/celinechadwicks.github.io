import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Skills from './components/Skills'

const style={'font-family': 'Georgia', 'font-weight':'600'}

const App = React.createClass({
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

export default App;
