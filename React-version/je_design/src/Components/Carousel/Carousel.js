import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css'
import travaux from '../../travaux';

const JECarousel = ({sujet, categorie, id}) => {
    const source = path => {
        if (path === 'mobilier') {
            return travaux[categorie][id].modele2Carousel
        } else if (path === 'produits') {
            return travaux.produits.produit1.recherches
        }
    },
    requireImage = image => {
        try {
            return require(`../../images/${image}`)
        } catch (err) {
            return require(`../../images/logo.png`)
        }
    }, 
    img = source(sujet)
        .split(', ')
        .map(picture => 
            <div>
                <img 
                    src={requireImage(picture)} 
                    alt={picture}>
                </img>
            </div>  )
    
    return(
        <div className='jeCarousel'>
            <Carousel>
                {img}
            </Carousel>
        </div>
    )
}

export default JECarousel