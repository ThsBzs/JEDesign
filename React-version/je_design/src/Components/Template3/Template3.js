import React, {Fragment} from 'react';
import './Template3.scss';
import travaux from '../../Sources/travaux'


const Template3 = ({requireImage, categorie, id}) => {
    const img = travaux[categorie][id].images3.split(', '),
        insert = (picture) => {
            return (
                <div className='picture3'>
                    <img 
                        src={requireImage(picture)} 
                        alt={picture}>
                    </img>
                </div>
            )
        }

    return (
        <Fragment>
            <div className="container3">
                <div className='pictureContainer3'>
                    {insert(img[0])}
                    {insert(img[1])}
                </div>
                <div className='pictureText'>
                    {insert(img[2])}    
                    <p className='text3'>
                        {travaux[categorie][id].content3}
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default Template3;