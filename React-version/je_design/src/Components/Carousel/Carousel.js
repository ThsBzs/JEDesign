import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css'
import travaux from '../../travaux';

const JECarousel = ({categorie, id}) => {
    
    const picture = travaux[categorie][id].modele2Carousel.split(', '),
    requireImage = image => {
        try {
            return require(`../../images/${image}`)
        } catch (err) {
            return require(`../../images/logo.png`)
        }
    }, 
    image =  picture.map( picture => 
            <div>
                <img 
                    src={requireImage(picture)} 
                    alt={picture}>
                </img>
            </div>
            
        
        )
    
    return(
        
        <div className='jeCarousel'>
            
            
        <Carousel>
        {image}
        </Carousel>
        
        </div>
        
    )
    
}

export default JECarousel