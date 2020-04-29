import React, { Component, Fragment } from 'react'
import './About.scss'

class About extends Component {
    render() {
        return(
            <Fragment>
                <div className="containerAbout">
                    <img src={require('./julien.jpg')} alt='Julien' className="aboutImg"></img>
                    <section className="aboutText">
                        <p>Designer d&#39;objets et de mobilier, je possède une sensibilité particulière pour les matériaux naturels et
                        l&#39;artisanat. Le travail des matières, les textures, les savoir-faire, les cultures du monde font partie de
                        mes principales inspirations pour la conception de projets.
                        Touche à tout, je maîtrise les logiciels 3D, le design d&#39;intérieur, le graphisme et conçois tous types
                        d&#39;objets : petite décoration, mobilier, produits industriels...
                        Mon parcours professionnel m&#39;a conduit à travailler en tant que designer produit, architecte
                        d&#39;intérieur, modéliste 3D pour décors de défilés de mode et designer d&#39;objets publicitaires.
                        Curieux, j&#39;aime découvrir, me renouveler et relever de nouveaux défis.</p>
                    </section>
                </div>
            </Fragment>
        )
    }
}

export default About