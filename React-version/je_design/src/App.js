import React, { Fragment } from 'react'
import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import Construction from './Components/Construction/Construction'
import Template1 from './Components/Template1/Template1'
import Template2 from './Components/Template2/Template2'
import Joy from './Components/Joy/Joy'
import Sapa from './Components/Sapa/Sapa'
import Template5 from './Components/Template5/Template5'
import Containerhome from './Components/ContainerHome/Containerhome';
import Contact from './Components/Contact/Contact'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Carousel from './Components/Carousel/Carousel'

const App = () => {
    return (
      <Fragment>
        <Nav />
        <BrowserRouter>
            <Switch>
              {/*ACCUEIL*/}
              <Route exact path='/' component={Home}/>
              <Route exact path='/home' component={Home}  />
              {/* MOBILIER */}
              <Route exact path="/mobilier" component={() => <Containerhome sujet='travaux'/>} />
              <Route path="/mobilier/chevet" component={() => <Template1  categorie='mobilier' id='mobilier1' />} />
              <Route path="/mobilier/console" component={() => <Template1  categorie='mobilier' id='mobilier2'/>} />
              <Route path="/mobilier/fauteuil" component={() => <Template1  categorie='mobilier' id='mobilier3'/>} />
              <Route path="/mobilier/sdb" component={() => <Template1  categorie='mobilier' id='mobilier4'/>} />
              <Route path="/mobilier/chaise" component={() => <Template1  categorie='mobilier' id='mobilier5'/>} />
              <Route path="/mobilier/console-white" component={() => <Template1  categorie='mobilier' id='mobilier8'/>} />
              <Route path="/mobilier/sapa" component={() => <Sapa  categorie='mobilier' id='mobilier6'/>} />
              {/* DESIGN INTERIEUR */}
              <Route path="/interior" component={() => <Joy  categorie='interiorDesign' id='joy'/>} />
              {/* PRODUITS */}
              <Route exact path="/products" component={() => 
                <Fragment>
                  {/* <Template5 /> */}
                  <Carousel sujet='produits' />
                  <Template1  categorie='produits' id='produit1' /> 
                  <Template2 categorie='produits' id='produit1'/> 
                </Fragment> }
              />
              {/* COM VISUELLE */}
              <Route exact path="/visuel" component={() => <Containerhome sujet='visuel' categorie='global' id='main'/>} />
              <Route path="/visuel/carte" component={() => <Containerhome sujet='visuel' categorie='produits' id='visuel1'/>} />
              <Route path="/visuel/mephich" component={() => <Containerhome sujet='visuel' categorie='produits' id='visuel2'/>} />
              <Route path="/visuel/abyss" component={() => <Containerhome sujet='visuel' categorie='produits' id='visuel3'/>} />
              <Route path="/visuel/petit" component={() => <Containerhome sujet='visuel' categorie='produits' id='visuel4'/>} />
              {/* SKETCHES */}
              <Route path='/sketches' component={Construction}/>
              {/* CONTACT */}
              <Route path="/contact" component={Contact} />
            </Switch>
        </BrowserRouter>
      </Fragment>
    )
}

export default App;
