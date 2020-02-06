import React, {Fragment} from 'react';
import './Template4.css'
import travaux from '../../travaux'

const Template4 = () => {
    const img = travaux.interiorDesign.joy.verticales.split(', '),
        requireImage = image => {
            try {
                return require(`../../images/${image}`)
            } catch (err) {
                return require(`../logo.png`)
            }
        },
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
