import React, { Component } from "react";
import { Container, Row, Col} from "react-bootstrap";
import "./static/css/landingpage.css"


export default class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.setState = {};
  }
  render() {
    const Header = () => <div className="header"></div>;
    return (
      <div>
        <Header />
        <Container className="bodyText">
        
          <div className="iconText">
            <Row>
              <Col xs={12} md={8}>
                <text className="text">
                  My Name is Morris Ombiro and I am a Software Engineer in Greater Minneapolis/St. Paul area 
                </text>
              </Col>
            </Row>
          </div>
          <div className="iconLogo">
          <Row >
          <Col md="auto" >
             
            
          </Col>
        </Row>
        </div>
        
        </Container>
      </div>
    );
  }
}
