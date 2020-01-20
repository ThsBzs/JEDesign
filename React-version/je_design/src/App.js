import React, { Fragment } from 'react'
import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import Construction from './Components/Construction/Construction'
import Template1 from './Components/Template1/Template1'
import Template2 from './Components/Template2/Template2'
import Template3 from './Components/Template3/Template3'
import Containerhome from './Components/ContainerHome/Containerhome';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

const App = () => {
    return (
      <Fragment>
        <Nav />
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/home' component={Home}  />
                <Route exact path="/products" component={() => 
                  <Fragment>
                    <Template1  categorie='produits' id='produit1' /> 
                    <Template2 categorie='produits' id='produit1'/> 
                  </Fragment> }
                />
                <Route exact path="/mobilier" component={() => <Containerhome un='mobilier/chevet/WSchevet1' deux='mobilier/console/WSconsole1' trois='mobilier/fauteuil/WSfauteuil1' quatre='mobilier/sdb/WSsdb1' />} />
                <Route path="/mobilier/chevet" component={() => <Template1  categorie='mobilier' id='mobilier1' />} />
                <Route path="/mobilier/console" component={() => <Template1  categorie='mobilier' id='mobilier2'/>} />
                <Route path="/mobilier/fauteuil" component={() => <Template1  categorie='mobilier' id='mobilier3'/>} />
                <Route path="/mobilier/sdb" component={() => <Template1  categorie='mobilier' id='mobilier4'/>} />
                <Route path="/mobilier/chaise" component={() => <Template1  categorie='mobilier' id='mobilier5'/>} />
                <Route path='/sketches' component={Construction}/>
                <Route exact path="/interior" component={Construction} />
                <Route path="/interior/resto" component={ () => <Template2 categorie='interiorDesign' id='joy'/>} />
                <Route path="/contact" component={Construction} />
            </Switch>
        </BrowserRouter>
      </Fragment>
    )


}

export default App;
