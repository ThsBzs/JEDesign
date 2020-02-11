import React,  { Fragment } from 'react'
import './Containerhome.css'
import visuel from '../../visuel'
import travaux from '../../travaux'

 const Containerhome = ({ sujet, categorie, id }) => {

    const source = path => {
        if (path === 'travaux') {
            return travaux.mobilier
        } else if (path === 'visuel') {
            return visuel[categorie][id]
        }
    },
    [nom] = source(sujet)
    console.log(nom)
    const requireImage = path => {
        try {
             return <img src={require(`../../images/${path}`)} alt={nom} className='containerHomeImg'><a href={nom.link}>{nom}</a></img>
         } catch (err) {
             return <img src={require(`../logo.png`)} alt={nom} className='containerHomeImg'></img>
         }
     }
     console.log([nom])
    //image = {...nom}.map(img => <li key={img}>{requireImage(img)}</li>)
    //.map(nom => <li key={nom}>{requireImage(this.imgHome)}</li>)
    
    // img = source(sujet).imghome,
    // link=source(sujet).link,
    // requireImage = path => {
    //     try {
    //         return <img src={require(`../../images/${path}`)} alt={nom} className='containerHomeImg'><a href={link}>{nom}</a></img>
    //     } catch (err) {
    //         return <img src={require(`../logo.png`)} alt={nom} className='containerHomeImg'></img>
    //     }
    // },
    // image = img.split(', ').map(img => <li key={img}>{requireImage(img)}</li>)
        
    return(
        <Fragment>
            <div className='container'>
                <ul className='containerImgList'>
                    {requireImage()}
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
