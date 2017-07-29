import React from "react";
import {Col, Card} from "react-materialize";
const style = {'max-height':'30px', 'margin':'20px'};
const contactStyle = {opacity: '.90',};




const Contact = React.createClass({
render() {
  return (
  <div id='contact'>

    <Col m={6} s={12}>
      <Card className='black center' textClassName='white-text center' style={contactStyle}>
      <h5>Contact</h5>
        <div>
          <br/>
          <a href="https://github.com/celinechadwick">
            <img src="./assets/githubSelect.png" style={style} className='circle hoverable'/>
          </a>

          <a href="https://linkedin.com/in/celinechadwick">
            <img src="./assets/linkedinSelect.png" style={style} className='hoverable '/>
          </a>
          <a href="mailto:cvc1230@gmail.com">
            <img src="./assets/emailSelect.png" style={style} className='hoverable '/>
          </a>
        </div>
      </Card>
    </Col>
  </div>

  )
}
})

export default Contact
