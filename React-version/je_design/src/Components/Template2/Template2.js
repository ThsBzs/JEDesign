import React, {Fragment} from 'react';
import './Template2.css';
import travaux from '../../travaux'

const Template2 = ({categorie, id}) => {
    return (
        <Fragment>
            <div className="container2">
                <div className='text2'>
                    {travaux[categorie][id].modele2Content}
                </div>
                <div className='picture2'>
                    <img src={require(`../../images/${travaux[categorie][id].modele2}`)} alt={categorie} ></img>
                </div>
            </div>
        </Fragment>
    )
}

export default Template2;