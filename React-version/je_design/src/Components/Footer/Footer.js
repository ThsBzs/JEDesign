import React, { Fragment } from 'react';
import './Footer.scss'

const Footer = () => {
    return(
        <Fragment>
            <section className='footer'>
                <p>© Julien Estaque Design - Réalisation : Homesailor</p>
                <a href='/mentions'>Mentions légales</a>
            </section>
        </Fragment>
    )
}

export default Footer