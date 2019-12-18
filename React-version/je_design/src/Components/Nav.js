import React from 'react';
import '../App.css';

const Nav = () =>(
    <nav className="nav">
        <a href="/home" className="logo" alt="Julien Estaque Design"><img src={require('./logo.png')} alt="Julien Estaque Design" /></a>
        <ul className="nav-links">
            <li><a href="/about">A propos</a></li>
            <li><a href="/products">Produits</a></li>
            <li className="nav-menu">
                <a href="/mobilier">Mobilier</a>
                <ul className="sous-menu">
                    <a href="/mobilier/console"><li className="console" >Console</li></a>
                    <a href="/mobilier/chevet"><li className="chevet">Table de chevet</li></a>
                    <a href="/mobilier/fauteuil"><li className="fauteuil" >Fauteuil</li></a>
                    <a href="/mobilier/sdb"><li className="sdb">Salle de bain</li></a>
                </ul>            
            </li>
            <li className="nav-menu">
                <a href="/interior">Design intérieur</a>
                <ul className="sous-menu">
                    <a href="/interior/resto"><li className="resto">Restaurant Joy - Hanoï</li></a>
                </ul> 
            </li>
            <li><a href="/sketches">Sketches</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
    )

export default Nav;