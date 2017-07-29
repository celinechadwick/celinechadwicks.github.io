import React from "react";
import {Card, CardTitle, Col, Row} from 'react-materialize';
const cardStyle = {margin:'20px'}

const Portfolio = React.createClass({
render() {
  return (
  <div id="portfolio">

    <Card className='center z-depth-2' style={cardStyle}>
    <h5>Portfolio</h5>
      <Row>
        <Col s={4}>
          <Card className='card-panel hoverable'
            header={<CardTitle image='./assets/math.jpg'></CardTitle>}
            actions={[<a href='https://github.com/celinechadwick/Project-1'>Guess the Number</a>]}>
            Add and multiply numbers in order to progress through this Javascript game!
            <a href="https://github.com/celinechadwick/Project-1">
            <button className='waves-effect waves-teal btn-flat'>View on Github </button>
            </a>
            <br/>
          </Card>
        </Col>
        <Col s={4}>
          <Card className='card-panel hoverable'
            header={<CardTitle image='./assets/tvflix.jpg'></CardTitle>}
            actions={[<a href='https://github.com/celinechadwick/tvflix'>Art Wiki</a>]}>
            Make an account, and save shows from the tvMaze API to your profile!
            <a href="https://tvflix-front.herokuapp.com/shows">
            <button className='waves-effect waves-teal btn-flat'>View on Heroku </button>
            </a>
          </Card>
        </Col>
        <Col s={4}>
          <Card className='card-panel hoverable'
            header={<CardTitle image='./assets/artbook.jpg'></CardTitle>}
            actions={[<a href='https://github.com/celinechadwick/Artbook_Back'>Artbook</a>]}>
            Find art by keyword, material or style, and save them to your account!
            <a href="https://artbook-front.herokuapp.com/">
            <button className='waves-effect waves-teal btn-flat'>View on Heroku </button>
            </a>
          </Card>
      </Col>
    </Row>
  </Card>

</div>
  )
}
})

export default Portfolio
