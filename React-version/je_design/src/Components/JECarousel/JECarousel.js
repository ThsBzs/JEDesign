import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './JECarousel.scss'
import travaux from '../../Sources/travaux'
import sketches from '../../Sources/sketches'
import visuel from '../../Sources/visuel'


const JECarousel = ({requireImage, sujet, categorie, id}) => {

    const source = path => {
        switch (path) {
            case 'mobilier':
                return travaux[categorie][id].modele2Carousel
            case 'produits':
                return travaux.produits[id].carrousel
            case 'visuel':
                return visuel[categorie][id].modele2Carousel
            case 'sketches':
                return sketches[id].modele2Carousel
            default:
                return travaux[categorie][id].modele2Carousel
        }
    },
    img = source(sujet)
        .split(', ')
        .map(picture => 
            <div key = {picture}>
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