import React from 'react'
import plume from '../img/plume.png'

export default function About() {
    return (
        <div className='fl' 
        style={{
            backgroundImage: `url(${plume})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            minHeight: '100vh', // Définissez une hauteur minimale pour que l'image de fond soit visible
          }}>  
            <h1 className='propos' id='adala' >A propos</h1>             
            <p className='tata'>
                Après avoir obtenu mon diplôme de cinq ans à l'École Supérieure Polytechnique d'Antananarivo, j'ai rapidement intégré le monde 
                professionnel en tant que Rédacteur/Correcteur au sein d'une entreprise française. Parallèlement, j'ai choisi de suivre une
                 formation approfondie en développement web dispensée par "Ilo Formation Madagascar", afin de parfaire mes connaissances dans 
                 ce domaine en constante évolution. Soucieux de rester à la pointe des dernières avancées technologiques, j'ai également complété
                  ma formation grâce à des cours en ligne de renom.

                Fort de ces solides fondations et de mes compétences acquises, j'ai déjà eu l'opportunité de réaliser plusieurs projets 
                passionnants, mettant en œuvre des technologies modernes et innovantes. Les détails de ces réalisations sont disponibles ci-dessous,
                 témoignant de ma capacité à mettre en pratique mes connaissances de manière concrète.

                En tant que candidat motivé et curieux, je suis constamment en quête de nouvelles occasions d'apprendre et de relever des défis dans 
                le domaine du développement web. Je suis convaincu que ma combinaison unique d'expertise technique, de rigueur rédactionnelle et de
                 passion pour l'innovation pourrait apporter une valeur ajoutée précieuse à votre entreprise.
            </p>
        </div>
    )
}
