import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './JECarousel.css'
import travaux from '../../Sources/travaux'
import sketches from '../../Sources/sketches'
import visuel from '../../Sources/visuel'


const JECarousel = ({requireImage, sujet, categorie, id}) => {

    const source = path => {
        if (path === 'mobilier') {
            return travaux[categorie][id].modele2Carousel
        } else if (path === 'produits') {
            return travaux.produits[id].carrousel
        } else if (path === 'visuel') {
            return visuel[categorie][id].modele2Carousel
        } else if (path === 'sketches') {
            return sketches[categorie][id].modele2Carousel
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