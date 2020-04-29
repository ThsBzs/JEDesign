import React, {Fragment} from 'react';
import './Burgernav.scss';

const Nav = () =>(
    <Fragment>
        
        <nav className="burger-nav">
            <div className="burger-bar">
                <p > </p>
                <p > </p>
                <p > </p>
                <ul className="burger-nav-links">
                    <li>
                        <a href="/home">A propos</a>
                    </li>
                    <li>
                        <a href="/products">Produits</a>
                    </li>
                    <li className="burger-nav-menu">
                        <a href="/mobilier">Mobilier</a>
                    </li>
                    <li className="burger-nav-menu">
                        <a href="/interior">Design intérieur</a>
                    </li>
                    <li>
                        <a href="/sketches">Sketches</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        
    </Fragment>
    )

export default Nav;