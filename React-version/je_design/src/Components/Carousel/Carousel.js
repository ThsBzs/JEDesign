import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css'
import travaux from '../../travaux';

const JECarousel = ({categorie, id}) => {
    
    const img = travaux[categorie][id].modele2Carousel.split(', '),
    requireImage = image => {
        try {
            return require(`../../images/${image}`)
        } catch (err) {
            return require(`../../images/logo.png`)
        }
    }
    console.log(img[1])
    
    return(
        <div className='jeCarousel'>
        <Carousel>
            <div>
                <img 
                    src={requireImage(img[0])} 
                    alt={img[0]}>
                </img>
            </div>
            <div>
                <img 
                    src={requireImage(img[1])} 
                    alt={img[1]}>
                </img>
            </div>
        </Carousel>
        </div>
    )
    
}

export default JECarousel