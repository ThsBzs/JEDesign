import React, {Fragment} from 'react';
import JECarousel from '../JECarousel/JECarousel'
import Template1 from '../Template1/Template1'

const Sapa = ({requireImage, categorie, id}) => {
    return (
        <Fragment>
            <Template1 categorie={categorie} id={id}/>
            <Template1 categorie={categorie} id={`mobilier7`}/>
            <JECarousel requireImage={requireImage} sujet={categorie} categorie={categorie} id={`mobilier7`}/>
        </Fragment>
    )
}

export default Sapa;