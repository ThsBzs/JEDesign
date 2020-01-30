import React, { Fragment } from 'react'

import './Contact.css'

const Contact = () => {
    return(
        <Fragment>
            <div className='containerContact'>
                <h2 className='contactPresentation'>
                    Une question ? Une précision ? Contactez-moi !
                </h2>
                <form className='formulaire'>
                    <label for='name'>Nom</label>
                    <input type='text' placeholder='Nom'  id='name' required></input>
                    <label for='prenom'>Prénom</label>
                    <input type='text' placeholder='Prénom' id='prenom' required></input>
                    <label for='societe'>Société</label>
                    <input type='text' placeholder='Société' id='societe'></input>
                    <label for='courriel'>Courriel</label>
                    <input type='text' placeholder='Courriel' id='courriel' required></input>
                    <label for='telephone'>Téléphone</label>
                    <input type='text' placeholder='Téléphone' id='telephone'></input>
                    <label for='message'>Message</label>
                    <textarea type='textarea' id='message' placeholder='Message' rows='20' cols='100'></textarea>
                </form>
                <button type='submit'>Envoyer</button>
            </div>
        </Fragment>
    )

}

export default Contact