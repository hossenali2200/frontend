import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <div className='footer'>

<Container>
      <Row>
        <Col> <Link to="/about">About</Link></Col>
        <Col><Link to="/contact">Contact</Link></Col>
        <Col><Link to="/policy">Privecy Policy</Link></Col>
     
            
            
      </Row>
      <Row>
      <Col> <Link to="/about">Contact</Link></Col>
      <Col> <Link to="/contact">Contact</Link></Col>
      <Col><Link to="/policy">Privecy Policy</Link></Col>
     
           
            
      </Row>
      <Row>
      <Col> <Link to="/about">Privecy Policy</Link></Col>
      <Col> <Link to="/contact">Contact</Link></Col>
      <Col><Link to="/policy">Privecy Policy</Link></Col>
     
           
            
      </Row>
      <Row>
      <Col> <Link to="/about">Subscribe</Link></Col>
      <Col> <Link to="/contact">Contact</Link></Col>
      <Col><Link to="/policy">Privecy Policy</Link></Col>
     
           
            
      </Row>


      <h4 className='text-center'>All Right Reserved &copy; BirdDigital </h4>
    </Container>
       
        
    </div>
  )
}

export default Footer