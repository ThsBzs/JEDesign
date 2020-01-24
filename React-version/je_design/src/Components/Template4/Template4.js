import React, {Fragment} from 'react';
import './Template4.css'
import travaux from '../../travaux'


const Template3 = () => {
    const img = travaux.interiorDesign.joy.verticales.split(', '),
        requireImage = (image) => (
            require(`../../images/${image}`)
        )

    return (
        <Fragment>
            <div className="container4">
                <div className='picture'>
                    <img 
                        src={requireImage(img[0])} 
                        alt={img[0]}>
                    </img>
                    <img 
                        src={requireImage(img[1])} 
                        alt={img[1]}>
                    </img>
                    <img 
                        src={requireImage(img[2])} 
                        alt={img[2]}>
                    </img>
                    <img 
                        src={requireImage(img[3])} 
                        alt={img[3]}>
                    </img>
                </div>
                <p className='text4'>
                    {travaux.interiorDesign.joy.modele4Content}
                </p>
            </div>
        </Fragment>
    )
}

export default Template3;
