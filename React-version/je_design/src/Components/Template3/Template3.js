import React, {Fragment} from 'react';
import './Template3.css';
import travaux from '../../travaux'


const Template3 = ({categorie, id}) => {
    const img = travaux[categorie][id].images.split(', '),
        requireImage = (image) => (
            require(`../../images/${image}`)
        )

    return (
        <Fragment>
            <div className="container3">
                <div className='pictureContainer3'>
                    <div className='picture3'>
                        <img 
                            src={requireImage(img[0])} 
                            alt={img[0]}>
                        </img>
                    </div>
                    <div className='picture3'>
                        <img 
                            src={requireImage(img[1])} 
                            alt={img[1]}>
                        </img>
                    </div>
                </div>
                <div className='pictureText'>
                    <div className='picture3'>
                        <img 
                            src={requireImage(img[3])} 
                            alt={img[2]}>
                        </img>
                    </div>
                    <p className='text3'>
                        {travaux[categorie][id].content}
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default Template3;