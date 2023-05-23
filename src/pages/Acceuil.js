import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import style from '../App.css'
import Presentation from './Presentation';
import Siderbar from './siderbar';

export default function Acceuil() {


  return (
    <div>
      <Container fluid> 
        <Row >
          <Col xs={4} md={3} xl={2}>

          <Siderbar/>
    </Col>

          <Col xs={8} md={9} xl={10}>
            <Presentation/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
