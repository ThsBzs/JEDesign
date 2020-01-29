import React, {Fragment} from 'react';
import Template2 from '../Template2/Template2'
import Template1 from '../Template1/Template1'

import './Sapa.css'


const Sapa = ({categorie, id}) => {
    return (
        <Fragment>
            <Template1 categorie={categorie} id={id}/>
            <Template1 categorie={categorie} id={`mobilier7`}/>
            <Template2 categorie={categorie} id={id}/>
        </Fragment>
    )
}

export default Sapa;