import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { userSchema } from '../validations/messageValidation';

export default function Contact() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'mon_cv.pdf'; // Nom de fichier souhaité pour le téléchargement
    link.click();
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    let formData = {
    name: e.target[0].value,
    sujet: e.target[1].value,
    email: e.target[2].value,
    message: e.target[3].value,
  };
  const isValid = await userSchema.isValid(formData);// permet de gerer la formvalidation par yup
  console.log(isValid);
  };

  return (

    <div className='contact'>
      <Container fluid>
        <Row className='first'>
          <Col xs={12} md={6} xl={8}>
            <h1 className='propos' id='at'>Contact</h1>
            <h3 className='ti' id='zaza'>Formulaire de message</h3>
            <form className='fo' onSubmit={handleSubmit}>
              <label for='name' className='name' >Nom</label>
              <input placeholder='Nom' type='text' className='fofo' id='name' required />
              <label for='sujet' className='name' id='iza' >Sujet de discussion</label>
              <input placeholder='Sujet de discussion' type='text' className='fofo' id='sujet' required />
              <label for='email' className='name'>Email</label>
              <input placeholder='Email' type='email' className='fofo' id='email' required />
              <label for='message' className='name' id='mes'>Votre message</label>
              <textarea placeholder='Votre Message ici' type='text' className='fofo' id='message' />
              <button type='submit' className='sub' >Envoyer</button>
            </form>

          </Col>

          <Col xs={12} md={6} xl={4} className='voyou'>
            <h2 className='to'>Telecharger mon CV </h2>
            <button className='b' onClick={handleDownload}>ICI</button>

          </Col>
        </Row>
      </Container>
    </div>
  )
}
