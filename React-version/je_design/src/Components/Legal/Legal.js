import React, { Fragment } from 'react';
import './Legal.scss'

const Legal = () => {
    return(
        <Fragment>
            <section className="legal">
                <h2>Mentions légales</h2>
                <p>Le site www.julien-estaque-design.homesailor.fr est exploité et géré par Julien Estaque.</p>
                <p>Il est réalisé par Homesailor, et hébergé par Ionos.</p>
                <br/>
                <br/>
                <h2>Droits d'auteur</h2>
                <p>La reproduction intégrale ou partielle, des pages, des textes, des photos, des données et de tout autre élément constitutif du site www.julien-estaque-design.homesailor.fr est interdite sans l’autorisation de l’éditeur, Julien Estaque Design, et constitue une contrefaçon.</p>
                <br/>
                <br/>
                <h2>Stockage et conservation des données</h2>
                <p>Nous ne collectons ni ne stockons aucune donnée personnelle.</p>
            </section>
        </Fragment>
    )
}
export default Legal