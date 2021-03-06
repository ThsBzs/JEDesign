import React, { Fragment } from 'react';
import './Template1.scss';
import travaux from '../../Sources/travaux'
import visuel from '../../Sources/visuel'
import sketches from '../../Sources/sketches'

const Template1 = ({sujet, categorie, id}) => {

    const source = path => {
        if (path === 'visuel') {
            return visuel[categorie][id]
        } else if (path ==='sketches'){
            return sketches[id]
        } else {
            return travaux[categorie][id]
        }
    },
    img = source(sujet).images,
    text = source(sujet).content,
    requireImage = path => {
        try {
            return <img src={require(`../../images/${path}`)} alt={source(sujet)} className='containerHomeImg'></img>
        } catch (err) {
            return <img src={require(`../logo.png`)} alt={source(sujet)} className='containerHomeImg'></img>
        }
    },
    image = img.split(', ').map(img => <li key={img}>{requireImage(img)}</li>)
        
    return(
        <Fragment>
            <h2 className='title1'>{source(sujet).name}</h2>
            <div className="container1">
                <div className='picture-container1'>
                    <ul className="pictures1">{image}</ul>
                </div>
                <div className='vertical1'>
                    {requireImage(source(sujet).verticale)}
                </div>
                <div className='text1'>
                    <p>{source(sujet).title}</p>
                    {/*Vérifie si text existe avant de l'ajouter*/}
                    {text && text.split('\n').map(text => <p key={text}>{text}<br /></p>)}
                </div>
            </div>
        </Fragment>
    )
}

export default Template1;