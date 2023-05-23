import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import boutique from '../img/boutique.jpg'
import api from '../img/api.png'
import pokedex from '../img/pokedex.jpg'
import { ReactComponent as Bootstrap } from '../img/logo/bootstrap.svg'
import { ReactComponent as Json } from '../img/logo/json.svg'
import { ReactComponent as Reacte } from '../img/logo/reactjs.svg'
import { ReactComponent as Nodejs } from '../img/logo/nodejs.svg'
import { ReactComponent as Express } from '../img/logo/express.svg'
import { ReactComponent as Firebase } from '../img/logo/firebase.svg'
import { ReactComponent as Internet } from '../img/logo/internet.svg'
import { useState } from 'react';
import { ReactComponent as GitHub } from '../img/logo/gigi.svg';


export default function Project() {
    const [show, setShow] = useState(false);

    const mouseEnter = () => {
        if (!show) {
            setShow(true);
        }
    };

    const mouseLeave = () => {
        if (show) {
            setShow(false);
        }
    };

    return (
        <div className='gg'>
            <h1 className='propos' id='v'>Les projets realisés</h1>
            <div className='carte'>
                <div className={`ensemble ${show ? 'oui' : 'non'}`} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                    <Card style={{ width: '28rem' }} className={`karatra ${show ? 'oui' : 'non'}`} >
                        <Card.Img variant="top" src={boutique} className='car' id='first' />
                        <Card.Body className='vata'>
                            <Card.Title>Ma Boutique en ligne</Card.Title>
                            <Card.Text>
                                Une boutique qui propose des articles diverses dans le domaine de la plomberie, l'installation electrique...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <div className={`details ${show ? 'show' : 'hide'}`} >
                        <h4 className='zay'>Languages et outils utilisés:</h4>
                        <Firebase className='lo' /><Reacte className='lo' /><Json className='lo' /><Bootstrap className='lo' />
                        <div className='bout'>
                            <Button variant="danger" className='gi'><Internet className='hh' /></Button>
                            <Button variant="danger" className='gi'><GitHub className='cible' /> </Button>
                        </div>
                    </div>
                </div>

                <div className={`ensemble ${show ? 'oui' : 'non'}`} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                    <Card style={{ width: '28rem' }} className={`karatra ${show ? 'oui' : 'non'}`}>
                        <Card.Img variant="top" src={api} className='car' />
                        <Card.Body className='vata'>
                            <Card.Title>API Pokemon</Card.Title>
                            <Card.Text>
                                Une API qui permet d'acquerir des donnees de au format JSON a l'aide d'un server distant...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <div className={`details ${show ? 'showw' : 'hidee'}`}>
                        <h4 className='zay'>Languages et outils utilisés:</h4>
                        <Firebase className='lo' /><Reacte className='lo' /><Express className='lo' /><Nodejs className='lo' />
                        <div className='bout'>
                            <Button variant="danger" className='gi'><Internet className='hh' /></Button>
                            <Button variant="danger" className='gi'><GitHub className='cible' /> </Button>
                        </div>
                    </div>
                </div>

                <div className={`ensemble ${show ? 'oui' : 'non'}`} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                    <Card style={{ width: '28rem' }} className={`karatra ${show ? 'oui' : 'non'}`}>
                        <Card.Img variant="top" src={pokedex} className='car' />
                        <Card.Body className='vata'>
                            <Card.Title>Pokedex</Card.Title>
                            <Card.Text>
                                Une application qui utilise firebase lors de l'authentification et le stockage des donnees...
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    <div className={`details ${show ? 'showww' : 'hideee'}`}>
                        <h4 className='zay'>Languages et outils utilisés:</h4>
                        <Firebase className='lo' /><Reacte className='lo' /><Json className='lo' /><Bootstrap className='lo' />
                        <div className='bout'>
                            <Button variant="outline-primary" className='gi'><Internet className='hh' /></Button>
                            <Button variant="outline-danger" className='gi'><GitHub className='cible' /> </Button>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}
