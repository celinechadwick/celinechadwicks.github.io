import React from "react";
import {Row, Col} from "react-materialize";
const style = {'height':'80px', 'max-width':'95px', 'margin':'40px'};
const contactStyle = {'background-color':'#F2F2F2', 'font-family': 'Futura', 'font-weight':'bold','font-size':'40px', 'padding':'40px', 'letter-spacing':'-.5px'};
const contactHeader= {'margin':'20px'}




const Contact = React.createClass({
render() {
  return (
  <div id='contact' className='center flow-text' style={contactStyle}>
    <div className="center red-text">Contact</div>
      <Row className="flow-text">
        <Col s={12}>
          <br/>
          <a href="https://github.com/celinechadwick">
            <img src="./assets/Asset 12.png" style={style} className='responsive-img'/>
          </a>

          <a href="https://linkedin.com/in/celinechadwick">
            <img src="./assets/Asset 1.png" style={style} className='responsive-img'/>
          </a>

          <a href="mailto:cvc1230@gmail.com">
            <img src="./assets/Asset 11.png" style={style}className='responsive-img' />
          </a>
          </Col>
        </Row>
  </div>

  )
}
})

export default Contact
