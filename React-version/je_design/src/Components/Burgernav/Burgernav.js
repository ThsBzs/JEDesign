import React, {Fragment} from 'react';
import './Burgernav.css';

const Nav = () =>(
    <Fragment>
        
        <nav className="burger-nav">
            <div className="burger-bar">
            <input type="checkbox" id="burgerCheck" />
            <label className='button' for='burgerCheck'>
            </label>
                <p > </p>
                <p > </p>
                <p > </p>
                
            <ul className="burger-nav-links">
                <li><a href="/home">A propos</a></li>
                <li><a href="/products">Produits</a></li>
                <li className="burger-nav-menu">
                    <a href="/mobilier">Mobilier</a>
                    <ul className="burger-sous-menu">
                        <a href="/mobilier/console"><li className="burger-console" >Console Line</li></a>
                        <a href="/mobilier/chevet"><li className="burger-chevet">Table de chevet</li></a>
                        <a href="/mobilier/fauteuil"><li className="burger-fauteuil">Fauteuil & sofa Angular</li></a>
                        <a href="/mobilier/sdb"><li className="burger-sdb">Salle de bain</li></a>
                        <a href="/mobilier/chaise"><li className="burger-chaise">Chaise Jali</li></a>
                    </ul>            
                </li>
                <li className="burger-nav-menu">
                    <a href="/interior">Design intérieur</a>
                    <ul className="burger-sous-menu">
                        <a href="/interior/resto"><li className="burger-resto">Restaurant Joy - Hanoï</li></a>
                    </ul> 
                </li>
                <li><a href="/sketches">Sketches</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            </div>
        </nav>
        
    </Fragment>
    )

export default Nav;