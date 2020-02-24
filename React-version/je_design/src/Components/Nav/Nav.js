import React, {Fragment} from 'react';
import './Nav.css';
import Burgernav from '../Burgernav/Burgernav'

const Nav = () => (
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
                        <a href="/mobilier/sapa"><li className="sapa">Gamme Sapa</li></a>
                        <a href="/mobilier/console-white"><li className="white">Console White</li></a>
                        <a href="/mobilier/chevet"><li className="chevet">Table de chevet</li></a>
                        <a href="/mobilier/fauteuil"><li className="fauteuil">Fauteuil & sofa Angular</li></a>
                        <a href="/mobilier/sdb"><li className="sdb">Salle de bain</li></a>
                        <a href="/mobilier/chaise"><li className="chaise">Chaise Jali</li></a>
                    </ul>            
                </li>
                <li className="nav-menu">
                    <a href="/interior">Design intérieur</a>
                    <ul className="sous-menu">
                        <a href="/interior/resto"><li className="resto">Restaurant Joy +</li></a>
                        <a href="/interior/waffle"><li className="waffle">WannaWaffle</li></a>
                    </ul> 
                </li>
                <li className="nav-menu">
                    <a href="/products">Produits</a>
                    <ul className="sous-menu">
                        <a href="/products/poele"><li className="pyrrhos">Poêle à bois</li></a>
                        <a href="/products/corbeille"><li className="corbeille">Corbeille</li></a>
                        <a href="/products/porte_savon"><li className="savon">Porte-savon</li></a>
                        <a href="/products/bougie"><li className="bougie">Support bougie</li></a>
                    </ul> 
                </li>
                <li className="nav-menu">
                    <a href="/visuel">Communication visuelle</a>
                    <ul className="sous-menu">
                        <a href="/visuel/carte"><li className="carte">Carte de visite</li></a>
                        <a href="/visuel/mephich"><li className="mephich">Restaurant Me Phich</li></a>
                        <a href="/visuel/abyss"><li className="abyss">Abyss</li></a>
                        <a href="/visuel/petit"><li className="petit">Petit - Centre d'apprentissage des langues</li></a>
                    </ul> 
                </li>
                <li className="nav-menu">
                    <a href="/sketches">Sketches</a>
                    <ul className="sous-menu">
                        <a href="/sketches/insectes"><li className="insectes">Insectes</li></a>
                        <a href="/sketches/animaux"><li className="animaux">Animaux</li></a>
                        <a href="/sketches/humains"><li className="humains">Humains</li></a>
                    </ul> 
                </li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </Fragment>
)

export default Nav;