import React, {Fragment} from 'react';
import './Template2.css';
import travaux from '../../Sources/travaux'

const Template2 = ({ requireImage, categorie, id}) => {
    const text = travaux[categorie][id].modele2Content,
    picture = travaux[categorie][id].modele2
    console.log(picture)


    return (
        <Fragment>
            <div className="container2">
                {text && <div className='text2'>{text}</div>}
                <div className='picture2'>
                    <img 
                    src={requireImage(picture)} 
                    alt={categorie} >
                    </img>
                </div>
            </div>
        </Fragment>
    )
}

export default Template2;