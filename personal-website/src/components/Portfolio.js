import React from "react";
import {Card, CardTitle, Col, Row, Button} from 'react-materialize';
const hStyle = {'margin-bottom':'60px', 'font-size':'40px', 'letter-spacing':'-.5px', 'font-weight':'bold'};
const divStyle = {'background-color':'#F2F2F2', 'font-family': 'Futura','padding':'40px'};
const img = {'max-height':'200px'};
const margin = {'margin':'20px', 'font-family':'Consolas'};
const button ={'font-size':'12px', 'width':'200px'};
const padding={margin:'40px', 'font-weight':'bold', 'font-size':'20px', 'height':'140px'};

const Portfolio = React.createClass({
render() {
  return (
  <div id="portfolio" style={divStyle}>

  <div style={hStyle} className="center red-text flow-text">Portfolio</div>
      <Row>
        <Col m={4} s={12} className="center">
            <div>
               <img src='./assets/math.jpg' className='responsive-img' style={img} />
               <br/>
              <p className='black-text flow-text' style={padding}> Add and multiply numbers in order to progress through this Javascript game</p>
              <Button waves='light' node='a' href='https://github.com/celinechadwick/Project-1' className="red" style={button}> Guess the Number </Button>
              <br/>
              </div>

              <div style={margin}>
                <a href='https://github.com/celinechadwick/Project-1' className='green-text'>> See code on Github</a>
              </div>
        </Col>

        <Col m={4} s={12} className="center">
          <div>
            <img src='./assets/tvflix.jpg' className='responsive-img' style={img}/>
            <br/>
            <p className='black-text' style={padding}>Make an account, and save shows from the tvMaze API to your profile</p>
            <Button waves='light' node='a' href='https://tvflix-front.herokuapp.com/shows' className="red" style={button}> TVFlix </Button>
          </div>
          <div style={margin}>
          <a href='https://github.com/celinechadwick/tvflix' className='green-text'>> See code on Github</a>
          </div>
        </Col>

        <Col m={4} s={12} className="center">
          <div>
            <img src='./assets/artbook.jpg' className='responsive-img' style={img}/>
            <br/>
            <p className='black-text' style={padding}>Find art by keyword, material or style, and save them to your account</p>
            <Button waves='light' node='a' href='https://artbook-front.herokuapp.com/' className="red" style={button}> ArtBook </Button>
          </div>
          <div style={margin}>
          <a href='https://github.com/celinechadwick/Artbook_Back' className='green-text'>> See code on Github</a>
          </div>
      </Col>
    </Row>

</div>
  )
}
})

export default Portfolio
