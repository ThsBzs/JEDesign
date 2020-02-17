import React, { Fragment, Component } from 'react'
import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import Construction from './Components/Construction/Construction'
import Template1 from './Components/Template1/Template1'
import Template2 from './Components/Template2/Template2'
import Joy from './Components/Joy/Joy'
import Sapa from './Components/Sapa/Sapa'
import Containerhome from './Components/ContainerHome/Containerhome';
import Contact from './Components/Contact/Contact'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import JECarousel from './Components/JECarousel/JECarousel'

class App extends Component {

  requireImage = image => {
    try {
        return require(`./images/${image}`)
    } catch (err) {
        return require(`./Components/logo.png`)
    }
  }

  render () {
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
              <Route path="/mobilier/sapa" component={() => <Sapa requireImage={this.requireImage} categorie='mobilier' id='mobilier6'/>} />
              <Route path="/mobilier/console" component={() => <Template1  categorie='mobilier' id='mobilier2'/>} />
              <Route path="/mobilier/fauteuil" component={() => <Template1  categorie='mobilier' id='mobilier3'/>} />
              <Route path="/mobilier/sdb" component={() => <Template1  categorie='mobilier' id='mobilier4'/>} />
              <Route path="/mobilier/chaise" component={() => <Template1  categorie='mobilier' id='mobilier5'/>} />
              <Route path="/mobilier/console-white" component={() => <Template1  categorie='mobilier' id='mobilier8'/>} />
              {/* DESIGN INTERIEUR */}
              <Route path="/interior" component={() => <Joy requireImage={this.requireImage} categorie='interiorDesign' id='joy'/>} />
              {/* PRODUITS */}
              <Route exact path="/products" component={() => <Containerhome sujet='produits' />} />
              <Route path="/products/corbeille" component={() => <Template1  categorie='produits' id='produit2' />} />
              <Route path="/products/porte_savon" component={() => 
                <Fragment>
                  <Template1  categorie='produits' id='produit3' />
                  <JECarousel requireImage={this.requireImage} sujet='produits'id='produit3' />
                </Fragment>} 
              />
              <Route path="/products/bougie" component={() => <Template1  categorie='produits' id='produit4' />} />
              <Route path="/products/pyrrhos" component={() => 
                <Fragment>
                  <JECarousel requireImage={this.requireImage} sujet='produits'id='produit1' />
                  <Template1  sujet='joy' categorie='produits' id='produit1' /> 
                  <Template2 categorie='produits' id='produit1'/> 
                </Fragment> }
              />
              {/* COM VISUELLE */}
              <Route exact path="/visuel" component={() => <Containerhome sujet='visuel' />} />
              <Route path="/visuel/carte" component={() => <Template1 sujet='visuel' categorie='produits' id='visuel1'/>} />
              <Route path="/visuel/mephich" component={() => 
                <Fragment>
                  <Template1 sujet='visuel' categorie='produits' id='visuel2'/>
                  <JECarousel requireImage={this.requireImage} sujet='visuel' categorie='produits' id='visuel2' />
                </Fragment> } />
              <Route path="/visuel/abyss" component={() => 
                <Fragment>
                    <Template1 sujet='visuel' categorie='produits' id='visuel3'/>
                    <JECarousel requireImage={this.requireImage} sujet='visuel' categorie='produits' id='visuel3' />
                </Fragment> }/>
              <Route path="/visuel/petit" component={() => <Containerhome sujet='visuel'/>} />
              {/* SKETCHES */}
              <Route path='/sketches' component={Construction}/>
              {/* CONTACT */}
              <Route path="/contact" component={Contact} />
            </Switch>
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default App;
