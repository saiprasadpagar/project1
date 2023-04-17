import React from "react"
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const LayoutDemo=()=>{
    return(<div>

<h3>LayoutDemo</h3>
    <Container className="bg-primary">Container</Container>
    <Container fluid className="bg-danger">Container Fluid</Container>
   <Row >

    <Col className="bg-warning">First Col</Col>
    <Col className="bg-info" xs={6}>Second Col</Col>
    <Col className="bg-secondary">Third Col</Col>
   </Row>
   <Row className="justify-content-center">
    <Col className="bg-warning" xs={6}>Forth</Col>
   </Row>
    </div>)
}
export default LayoutDemo;