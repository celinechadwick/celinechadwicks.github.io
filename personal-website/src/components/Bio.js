import React from "react";
import {Col, Row} from "react-materialize";
const profileStyle = {'max-height':'350px', margin:'auto'};
const style = {'margin-bottom':'40px', 'font-family':'Futura', 'font-size':'18px', 'letter-spacing':'1px', 'font-weight':'lighter', 'padding':'40px'};
const pStyle = {'max-width':'600px', 'max-height':'350px', 'margin':'40px'};


const Bio = React.createClass({
render() {
  return (
  <div id='bio' style={style}>
  <Row>
    <Col m={4}>
      <img src="./assets/profile-img.jpg" className='circle center right responsive-img' style={profileStyle}/>
    </Col>
    <Col m={6}>
        <p className="black-text" style={pStyle}>I am a full-stack web developer with a client-facing background in customer experience. I am driven to teach myself about what I am passionate about until I have mastered it, and I enjoy
        teaching what I know to others, whether it is photography, design, programming or writing.
        </p>
    </Col>
    </Row>
  </div>
  )
}
})

export default Bio
