import React, { Fragment } from 'react'

import './Contact.css'

const Contact = () => {
    const handleClick = () => { 
        window.open("mailto:julien.estaque@gmail.com")
    }

    return(
        <Fragment>
            <div className='containerContact'>
                <h2 className='contactPresentation'>
                    Une question ? Une précision ? Contactez-moi !
                </h2>
                <button type='submit' onClick={handleClick}>Envoyer un message</button>
            </div>
        </Fragment>
    )

}

export default Contact