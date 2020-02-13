import React, {Fragment} from 'react';
import './Template4.css'
import travaux from '../../travaux'

const Template4 = ({requireImage}) => {
    const img = travaux.interiorDesign.joy.verticales.split(', '),
        image = img.map(img => <img src={requireImage(img)} alt={img}></img>)


    return (
        <Fragment>
            <div className="container4">
                <div className='picture'>
                    {image}
                </div>
                <p className='text4'>
                    {travaux.interiorDesign.joy.modele4Content}
                </p>
            </div>
        </Fragment>
    )
}

export default Template4;
