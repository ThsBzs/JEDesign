import React, {Fragment} from 'react';
import './Template5.css'
import travaux from '../../travaux'

const Template5 = () => {

    const img = travaux.produits.produit1.recherches
        .split(', ')
        .map(item => <img src={require(`../../images/${item}`)} alt={item} key={item}></img>)
    

    return (
        <Fragment>
            <div className="container5">
                <div className='picture5'>
                    {img}
            </div>
            </div>

        </Fragment>
    )
}

export default Template5;