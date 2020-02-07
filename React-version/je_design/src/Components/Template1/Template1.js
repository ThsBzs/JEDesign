import React, { Fragment } from 'react';
import './Template1.css';
import travaux from '../../travaux'
import visuel from '../../visuel'

const Template1 = ({sujet, categorie, id}) => {

    const source = path => {
        if (path === 'visuel') {
            return visuel[categorie][id]
        } else {
            return travaux[categorie][id]
        }
    },
    nom = source(sujet),
    img = source(sujet).images,
    name= source(sujet).title,
    content= source(sujet).content,
    requireImage = path => {
        try {
            return <img src={require(`../../images/${path}`)} alt={nom} className='containerHomeImg'></img>
        } catch (err) {
            return <img src={require(`../logo.png`)} alt={nom} className='containerHomeImg'></img>
        }
    },
    image = img.split(', ').map(img => <li key={img}>{requireImage(img)}</li>)
        
    return(
        <Fragment>
            <div className="container1">
                <div className='picture-container1'>
                    <h2>{name}</h2>
                    <ul className="pictures1">{image}</ul>
                </div>
                <div className='vertical1'>
                    {requireImage(source(sujet).verticale)}
                </div>
                <div className='text1'>
                    <p>{name}</p>
                    <p>{content} </p>
                </div>
            </div>
        </Fragment>
    )
}

export default Template1;