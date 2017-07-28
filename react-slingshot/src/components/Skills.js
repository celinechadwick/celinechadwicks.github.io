import React from "react";
import {Card, Col, Row} from "react-materialize"
const pStyle = {margin:'20px', 'font-size': '18px'};
const cardStyle = {margin:'20px'};



const Skills = React.createClass({
render() {
  return (
  <div id='skills'>

    <Col m={6} s={12}>
  		<Card className='center z-depth-2'style={cardStyle}>
      <h5>Skills</h5>
      <Row>
    <Col s={6}>
      <ul className='collection z-depth-2'>
        <li className="collection-item avatar">
          <img src="./assets/reactlogo.png" alt="" className="circle"/>
            <span className="title">React</span>
        </li>

        <li className="collection-item avatar">
          <img src="./assets/nodelogo.svg" alt="" className="circle"/>
            <span className="title">Node.js</span>
        </li>

        <li className="collection-item avatar">
          <img src="./assets/rubylogo.jpeg" alt="" className="circle"/>
            <span className="title">Ruby on Rails</span>
        </li>

        <li className="collection-item avatar">
          <img src="./assets/javascriptlogo.png" alt="" className="circle"/>
            <span className="title">Javascript</span>
        </li>
      </ul>
    </Col>

    <Col s={6}>
      <ul className='collection z-depth-2'>
        <li className="collection-item avatar">
          <img src="./assets/expresslogo.png" alt="" className="circle"/>
            <span className="title">Express</span>
        </li>

        <li className="collection-item avatar">
          <img src="./assets/postgresql.jpg" alt="" className="circle"/>
            <span className="title">PostgreSQL</span>
        </li>

        <li className="collection-item avatar">
          <img src="./assets/githubSelect.png" alt="" className="circle"/>
            <span className="title">Github</span>
        </li>

        <li className="collection-item avatar">
          <img src="./assets/html.svg" alt="" className="circle"/>
            <span className="title">HTML</span>
        </li>
      </ul>
    </Col>

    </Row>
  		</Card>
    </Col>

  </div>


    )
  }
})
export default Skills
