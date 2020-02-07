import React, {Fragment} from 'react';
import Template4 from '../Template4/Template4'
import Template2 from '../Template2/Template2'
import Template3 from '../Template3/Template3'
import Template1 from '../Template1/Template1'
import JECarousel from '../JECarousel/JECarousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Joy = ({categorie, id}) => {

    return (
        <Fragment>
            <Template2 categorie={categorie} id={id}/>
            <Template1 categorie={categorie} id={id}/>
            <Template2 categorie={categorie} id={'joy2'}/>
            <JECarousel sujet={'mobilier'} categorie={categorie} id={'joy2'}/>
            <Template3 categorie={categorie} id={id}/>
            <Template4/>
        </Fragment>
    )
}

export default Joy;