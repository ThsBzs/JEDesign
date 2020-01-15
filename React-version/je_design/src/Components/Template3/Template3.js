import React, {Fragment} from 'react';
import './Template3.css';
import mobiliers from '../../mobilier'


const Template3 = ({details}) => {
    const img = mobiliers[details].images.split(', ')

    const requireImage = (image) => (
        require(`../../images/${image}`)
    )

    return (
        <Fragment>
            <div className="container3">
                <div className='pictureContainer3'>
                    <img 
                        src={requireImage(img[0])} 
                        alt={img[0]}>
                    </img>
                    <img 
                        src={requireImage(img[1])} 
                        alt={img[1]}>
                    </img>
                </div>
                <div className='pictureText'>
                    <img 
                        src={requireImage(img[3])} 
                        alt={img[2]}>
                    </img>
                    <p className='text3'>
                        {mobiliers[details].content}
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default Template3;