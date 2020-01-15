import React, { Fragment } from 'react';
import './Template1.css';

const Template1 = ({img, title, name, content, verticalImg}) => {

    const requireImage = path => {
        try {
            return <img src={require(`../../images/${path}`)} alt={name}></img>
        } catch (err) {
            return <img src={require(`../logo.png`)} alt={name}></img>
        }
    }

    const image = img.split(', ').map(img => <li key={img}>{requireImage(img)}</li>)

    return(
        <Fragment>
            <div className="container">
                <div className='picture-container'>
                <h2>{title}</h2>
                    <ul className="pictures">
                        {image}
                    </ul>
                </div>
                <div className='vertical'>
                    {requireImage(verticalImg)}
                </div>
                <div className='text'>
                    <p>{name}</p>
                    <p>{content}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Template1;