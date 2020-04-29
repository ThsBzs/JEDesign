import React, {Fragment} from 'react';
import './Template2.scss';
import travaux from '../../Sources/travaux'

const Template2 = ({ requireImage, categorie, id}) => {
    const text = travaux[categorie][id].modele2Content.split('\n'),
    picture = travaux[categorie][id].modele2

    return (
        <Fragment>
            <div className="container2">
                {text && <div className='text2'>{text.map(text => <p>{text}<br /></p>)}</div>}
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