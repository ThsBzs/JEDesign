import React, { Fragment, Component} from 'react'

import Home from './Home/Home'
import Template1 from './Template1/Template1'
import Template2 from './Template2/Template2'
import Template3 from './Template3/Template3'
import Joy from './Joy/Joy'
import Sapa from './Sapa/Sapa'
import Containerhome from './ContainerHome/Containerhome';
import Contact from './Contact/Contact'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import JECarousel from './JECarousel/JECarousel'
import Legal from './Legal/Legal'

class Page extends Component  {
    requireImage = image => {
        try {
            return require(`../images/${image}`)
        } catch (err) {
            return require(`./logo.png`)
        }
      }

      render() {
    return (
        <Fragment>
          <Router>
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
              <Route exact path="/interior" component={() => <Containerhome sujet='interiorHome'/>} />
              <Route path="/interior/resto" component={() => <Joy requireImage={this.requireImage} categorie='interiorDesign' id='joy'/>} />
              <Route path="/interior/waffle" component={() => 
                <Fragment>
                  <Template1  categorie='interiorDesign' id='waffle' />
                  <JECarousel requireImage={this.requireImage} sujet='mobilier' categorie='interiorDesign' id='waffle' />
                  <Template1  categorie='interiorDesign' id='waffle2' />
                  <Template3  requireImage={this.requireImage} categorie='interiorDesign' id='waffle' />
                </Fragment>} 
              />
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
              <Route path="/products/poele" component={() => 
                <Fragment>
                  <JECarousel requireImage={this.requireImage} sujet='produits' id='produit1' />
                  <Template1 categorie='produits' id='produit1' /> 
                  <Template2 requireImage={this.requireImage} categorie='produits' id='produit1'/> 
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
              <Route path="/visuel/petit" component={() => 
                <Fragment>
                    <Template1 sujet='visuel' categorie='produits' id='visuel4'/>
                    <JECarousel requireImage={this.requireImage} sujet='visuel' categorie='produits' id='visuel4' />
                </Fragment> }/>
              {/* SKETCHES */}
              <Route exact path='/sketches' component={() => <Containerhome sujet='sketches'/>} />
              <Route path="/sketches/insectes" component={() => 
                <Fragment>
                    <Template1 sujet='sketches'  id='insectes'/>
                    <JECarousel requireImage={this.requireImage} sujet='sketches' id='insectes' />
                    <JECarousel requireImage={this.requireImage} sujet='sketches' id='insectes2' />
                </Fragment> }/>
                <Route path="/sketches/animaux" component={() => <JECarousel requireImage={this.requireImage} sujet='sketches' id='animaux' />} />
                <Route path="/sketches/humains" component={() => 
                <Fragment>
                    <Template1 sujet='sketches' id='humains'/>
                    <JECarousel requireImage={this.requireImage} sujet='sketches' id='humains' />
                </Fragment> }/>
              {/* CONTACT */}
              <Route path="/contact" component={Contact} />
              {/*LEGAL*/}
              <Route path="/mentions" component={Legal} />
            </Switch>
          </Router>
        </Fragment>
    )
  }
}

export default Page