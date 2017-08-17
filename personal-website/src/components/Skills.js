import React from "react";
import {Col, Row} from "react-materialize";
const sectionStyle = {'padding':'40px', 'font-family':'Futura', 'font-size':'18px'};
const skills = {'margin' :'30px', 'font-size':'40px', 'letter-spacing':'-.5px', 'font-weight':'bold'};
const padding={'padding':'20px'};
const img={'max-height':'120px'}



const Skills = React.createClass({
render() {
  return (
  <div id='skills' className="black-text">
    <div style={sectionStyle}>
    <Col s={12}>
        <div className="center red-text" style={skills}>Skills</div>

    </Col>
    <Row className='center'>
        <Col m={3} s={6} style={padding}>
            <img src="./assets/Asset 15@2x.png" alt="" className='responsive-img' style={img}/>
              <div class="caption center-align">React</div>
        </Col>

        <Col m={3} s={6} style={padding}>
          <img src="./assets/Asset 16@2x.png" alt="" className='responsive-img' style={img}/>
            <div class="caption center-align">Node.js</div>
        </Col>

        <Col m={3} s={6} style={padding}>
          <img src="./assets/Asset 13@2x.png" alt="" className='responsive-img' style={img}/>
            <div class="caption center-align">Ruby on Rails</div>
        </Col>

        <Col m={3} s={6} style={padding}>
          <img src="./assets/Asset 24@2x.png" alt="" className='responsive-img' style={img}/>
            <div class="caption center">Javascript</div>
        </Col>
    </Row>

    <Row className='center'>
        <Col m={3} s={6} style={padding}>
          <img src="./assets/Asset 17@2x.png" className='height:400px' alt="" className='responsive-img' style={img} />
            <div class="caption center-align">Express</div>
        </Col>

        <Col m={3} s={6} style={padding}>
          <img src="./assets/Asset 18@2x.png" alt="" className='responsive-img' style={img}/>
            <div class="caption center-align">PostgreSQL</div>
        </Col>

        <Col m={3} s={6} style={padding}>
          <img src="./assets/Asset 20@2x.png" alt="" className='responsive-img' style={img}/>
            <div class="caption center-align">Github</div>
        </Col>

        <Col m={3} s={6} style={padding}>
          <img src="./assets/Asset 23@2x.png" alt="" className='responsive-img' style={img}/>
            <div class="caption center-align">HTML</div>
        </Col>
    </Row>

    </div>
  </div>


    )
  }
})
export default Skills
