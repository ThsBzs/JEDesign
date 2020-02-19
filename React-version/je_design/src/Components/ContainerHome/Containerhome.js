import React,  { Fragment } from 'react'
import './Containerhome.css'
import visuel from '../../Sources/visuel'
import travaux from '../../Sources/travaux'
import sketches from '../../Sources/sketches'

 const Containerhome = ({ sujet }) => {

    const source = path => {
        switch (path) {
            case 'travaux':
                return travaux.mobilier
            case 'visuel':
                return visuel.produits
            case 'produits':
                return travaux.produits
            case 'interiorHome':
                return travaux.interiorHome
            case 'sketches':
                return sketches.sketchesHome
            default:
                return travaux.mobilier
        }
    },
    arr = source(sujet),
    requireImage = path => {
        try {
             return <li>
                        <a href={path.link} >
                            <img src={require(`../../images/${path.imgHome}`)} alt={path.title} className='containerHomeImg'>
                            </img>
                        </a>
                    </li>
         } catch (err) {
             return <img src={require(`../logo.png`)} alt={arr} className='containerHomeImg'></img>
         }
     }
        
    return(
        <Fragment>
            <div className='container'>
                <ul className='containerImgList'>
                    {Object.keys(arr).map(key => requireImage(arr[key]))}
                </ul>
                { sujet === 'travaux' &&
                    <div className='containerHomeText'>
                        <p>{travaux.mobilierHome.content}</p>
                    </div>
                }

            </div>
        </Fragment>
    )
 }

 export default Containerhome;
