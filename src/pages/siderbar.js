import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPerson, faListCheck, faIdBadge, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Facebook } from '../img/logo/facebook.svg';
import { ReactComponent as LinkedIn } from '../img/logo/linkedin.svg';
import { ReactComponent as Gmail } from '../img/logo/gmail.svg';
import { Link } from 'react-scroll';
import { ReactComponent as GitHub } from '../img/logo/gigi.svg';

export default function Siderbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsSidebarOpen(true);
  }

  const handleMouseLeave = () => {
    setIsSidebarOpen(false);
  }
  return (
    <div className='fix'>
      <Container fluid>
        <Row >
          <Col xs={4} md={3} xl={2}>
            <nav className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <ul className="nav flex-column">

                <li className="nav-item">
                  <Link to="acceuil" smooth={true} duration={500} className="nav-link"><FontAwesomeIcon icon={faHouse} className='ico' /><span className='cacher'>Acceuil</span></Link>
                </li>

                <li className="nav-item">
                  <Link to="about" smooth={true} duration={500} className="nav-link" ><FontAwesomeIcon icon={faAddressCard} className='ico' /><span className='cacher'>A propos</span></Link>
                </li>

                <li className="nav-item">
                <Link to="skills" smooth={true} duration={500} className="nav-link" ><FontAwesomeIcon icon={faPerson} className='ico' /><span className='cacher'>SKills</span></Link>

                </li>
                <li className="nav-item">
                <Link to="project" smooth={true} duration={500} className="nav-link" ><FontAwesomeIcon icon={faListCheck} className='ico' /><span className='cacher'>Mes projets</span></Link>
                </li>
                <li className="nav-item">
                <Link to="contact" smooth={true} duration={500} className="nav-link" id='foot'><FontAwesomeIcon icon={faIdBadge} className='ico' /><span className='cacher'>Contact</span></Link>
                 
                </li>
                <li className={`nav-item social-icons ${isSidebarOpen ? 'open' : 'closed'}`}>
                  <div className='vody'><a href='mailto:ramahatra@gmail.com' target='_blank'><Gmail className='grou' /></a><a href='https://www.linkedin.com/in/vahatriniaina-ramaheninarivo-377b8b164/' target='_blank'><LinkedIn className='grou' /></a> <a href='https://github.com/Vahatrinitaina' target='_blank'><GitHub className='grou'/></a></div>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
