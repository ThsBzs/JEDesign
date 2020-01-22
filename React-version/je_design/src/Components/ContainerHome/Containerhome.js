import React,  { Fragment } from 'react'
import './Containerhome.css'

 const Containerhome = ({ un, deux, trois, quatre}) => {
    return(
        <Fragment>
            <div className='container'>
                <ul className='containerImgList'>
                    <li>
                        <img src={require(`../../images/${un}.jpg`)} alt="console" className='containerHomeImg'/>
                    </li>
                    <li>
                        <img src={require(`../../images/${deux}.jpg`)} alt="sdb" className='containerHomeImg'/>
                    </li>
                    <li>
                        <img src={require(`../../images/${trois}.jpg`)} alt="chevet" className='containerHomeImg'/>
                    </li>
                    <li>
                        <img src={require(`../../images/${quatre}.jpg`)} alt="fauteuil" className='containerHomeImg' />
                    </li>
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
