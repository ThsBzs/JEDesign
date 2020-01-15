import React, {Fragment} from 'react';
import './Template2.css';
import mobiliers from '../../mobilier'

const Template2 = ({details}) => {
    return (
        <Fragment>
            <div className="container2">
                <div className='text2'>
                    {mobiliers[details].content}
                </div>
                <div className='picture'>
                    <img src={require(`../../images/${mobiliers[details].images}`)} alt={details} ></img>
                </div>
            </div>
        </Fragment>
    )
}

export default Template2;