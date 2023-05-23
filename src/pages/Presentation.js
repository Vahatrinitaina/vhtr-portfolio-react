import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import vahatra from '../img/v.jpg'
import ink from '../img/ink.png'

export default function Presentation() {
  return (
    <div>
      <Container fluid>
        
        <Row>
        <Col xs={12} md={4} xl={4}>
          <div className='cible'><img src={vahatra} alt='sary-vahatra' className='profile'/></div>
        </Col>
          <Col  xs={12} md={8} xl={8}>
            <div className='pres'>
      <h3 className='anarana'><span className='je'> Je suis</span> <span className='moi'>Vahatriniaina Ramaheninarivo</span></h3>
      <h1 className='titre'>Web Developper Fullstack</h1>

      </div>
      </Col>

        
      </Row> 
      </Container>
      <iframe src="https://giphy.com/embed/n7PsZjfO6JgaUdCiTw" width="480" height="366" frameBorder="0" class="giphy-embed" allowFullScreen className='arrow'/>
    </div>
  )
}
