import React, {Fragment} from 'react';
import './Nav.css';

import Burgernav from '../Burgernav/Burgernav'

const Nav = () =>(
    <Fragment>
        <nav className="nav">
            <a href="/home" className="logo" alt="Julien Estaque Design"><img src={require('../logo.png')} alt="Julien Estaque Design" /></a>
            <Burgernav />
            <ul className="nav-links">
                <li><a href="/home">A propos</a></li>
                <li className="nav-menu">
                    <a href="/mobilier">Mobilier</a>
                    <ul className="sous-menu">
                        <a href="/mobilier/console"><li className="console" >Console Line</li></a>
                        <a href="/mobilier/console-white"><li className="white">Console White</li></a>
                        <a href="/mobilier/chevet"><li className="chevet">Table de chevet</li></a>
                        <a href="/mobilier/fauteuil"><li className="fauteuil">Fauteuil & sofa Angular</li></a>
                        <a href="/mobilier/sdb"><li className="sdb">Salle de bain</li></a>
                        <a href="/mobilier/chaise"><li className="chaise">Chaise Jali</li></a>
                        <a href="/mobilier/sapa"><li className="sapa">Gamme Sapa</li></a>
                    </ul>            
                </li>
                <li className="nav-menu">
                    <a href="/interior">Design intérieur</a>
                    <ul className="sous-menu">
                        <a href="/interior/resto"><li className="resto">Restaurant Joy + - Hanoï</li></a>
                    </ul> 
                </li>
                <li><a href="/products">Produits</a></li>
                <li><a href="/sketches">Sketches</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        
    </Fragment>
    )

export default Nav;