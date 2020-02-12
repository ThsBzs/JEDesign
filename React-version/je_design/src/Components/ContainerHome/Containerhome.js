import React,  { Fragment } from 'react'
import './Containerhome.css'
import visuel from '../../visuel'
import travaux from '../../travaux'

 const Containerhome = ({ sujet }) => {

    const source = path => {
        if (path === 'travaux') {
            return travaux.mobilier
        } else if (path === 'visuel') {
            return visuel.produits
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
                <div className='containerHomeText'>
                        <p>Des meubles pensés pour durer.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna fringilla urna porttitor rhoncus dolor purus non enim. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Ornare lectus sit amet est placerat.</p>
                </div>
            </div>
        </Fragment>
    )
 }

 export default Containerhome;
