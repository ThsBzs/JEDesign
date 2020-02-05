import React, { Fragment } from 'react';
import './Template1.css';
import travaux from '../../travaux'

const Template1 = ({categorie, id}) => {
    //Sur l'objet passé dans détails,
    const name = travaux[categorie][id].name
    //on récupère le nom et les images
    const img = travaux[categorie][id].images,
    //Fonction de traitement d'image + erreur si besoin
    requireImage = path => {
        try {
            return <img src={require(`../../images/${path}`)} alt={name}></img>
        } catch (err) {
            return <img src={require(`../logo.png`)} alt={name}></img>
        }
    },
    //Image récupère un tableau de toutes les images
    image = img.split(', ').map(img => <li key={img}>{requireImage(img)}</li>)
        
    return(
        <Fragment>
            <div className="container1">
                <div className='picture-container1'>
                    <h2>{travaux[categorie][id].title}</h2>
                    <ul className="pictures1">{image}</ul>
                </div>
                <div className='vertical1'>
                    {requireImage(travaux[categorie][id].verticale)}
                </div>
                <div className='text1'>
                    <p>{name}</p>
                    <p>{travaux[categorie][id].content} </p>
                </div>
            </div>
        </Fragment>
    )
}

export default Template1;