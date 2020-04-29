import React,  { Fragment } from 'react'
import './Containerhome.scss'
import visuel from '../../Sources/visuel'
import travaux from '../../Sources/travaux'
import sketches from '../../Sources/sketches'

 const Containerhome = ({ sujet }) => {

    const source = path => {
        switch (path) {
            case 'travaux':
                return travaux.mobilier
            case 'home':
                return sketches.home
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
             return <li key={path.name}>
                        <a href={path.link} >
                            <h2 className='name'>{path.name}</h2>
                            <img src={require(`../../images/${path.imgHome}`)} alt={path.title} className='containerHomeImg'>
                            </img>
                        </a>
                    </li>
         } catch (err) {
             
         }
     }
        
    return(
        <Fragment>
            <div className='container'>
                {sujet === 'home' ? 
                    <ul className='home'>
                    {Object.keys(arr).map(key => key=requireImage(arr[key]))}
                </ul> :
                <ul className='containerImgList'>
                    {Object.keys(arr).map(key => key=requireImage(arr[key]))}
                </ul>
                }
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
