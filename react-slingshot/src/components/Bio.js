import React from "react";
import {Col, Card} from "react-materialize";
const style = {'max-height':'30px', 'margin':'20px'};
const pStyle = {margin:'20px', 'font-size': '18px', 'font-family': 'Lato:300'};
const profileStyle = {'max-height':'250px', padding:'15px'}
const cardStyle = {margin:'20px'}


const Bio = React.createClass({
render() {
  return (
  <div id='bio'>

    <Col m={6} s={12}>
  		<Card className='black center z-depth-2' textClassName='white-text center' style={cardStyle}>
      <img src="./assets/profile-img.jpg" className='circle center' style={profileStyle}/>
      <img src="./assets/quote.png" className='center responsive-img' style={profileStyle}/>


  		</Card>
  </Col>

</div>

  )
}
})

export default Bio
