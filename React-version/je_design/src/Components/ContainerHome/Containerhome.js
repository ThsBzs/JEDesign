import React,  { Fragment } from 'react'
import './Containerhome.css'

 const Containerhome = ({ un, deux, trois, quatre}) => {
    return(
        <Fragment>
            <div className='container'>
                <ul className='imgList'>
                    <li>
                        <img src={require(`../../images/${un}.jpg`)} alt="console" />
                    </li>
                    <li>
                        <img src={require(`../../images/${deux}.jpg`)} alt="sdb" />
                    </li>
                    <li>
                        <img src={require(`../../images/${trois}.jpg`)} alt="chevet"/>
                    </li>
                    <li>
                        <img src={require(`../../images/${quatre}.jpg`)} alt="fauteuil"  />
                    </li>
                </ul>
                <div className='text'>
                        <p>Ils sont beaux mes meubles !</p>
                        <p>Du mobilier. Du bois. De l'amour. T'en veux?</p>
                </div>
            </div>
        </Fragment>
    )
 }

 export default Containerhome;
