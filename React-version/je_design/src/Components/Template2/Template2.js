import React, {Fragment} from 'react';
import './Template2.css';
import travaux from '../../travaux'

const Template2 = ({categorie, id}) => {
    const text = travaux[categorie][id].modele2Content

    return (
        <Fragment>
            <div className="container2">
                {text ? <div className='text2'>{text}</div> : <div style={{display: 'none'}}>
                </div>  }
                <div className='picture2'>
                    <img src={require(`../../images/${travaux[categorie][id].modele2}`)} alt={categorie} ></img>
                </div>
            </div>
        </Fragment>
    )
}

export default Template2;