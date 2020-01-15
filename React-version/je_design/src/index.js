import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './Components/Nav/Nav'
import * as serviceWorker from './serviceWorker';
import Home from './Components/Home/Home'
import Construction from './Components/Construction/Construction'
import Template2 from './Components/Template2/Template2'
import Template3 from './Components/Template3/Template3'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Containerhome from './Components/ContainerHome/Containerhome';

const Root = () => (
    <Fragment>
        <Nav />
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/home' component={Home}  />
                <Route exact path="/products" component={Construction} />
                <Route exact path="/mobilier" component={() => <Containerhome un='mobilier/chevet/WSchevet1' deux='mobilier/console/WSconsole1' trois='mobilier/fauteuil/WSfauteuil1' quatre='mobilier/sdb/WSsdb1' />} />
                <Route path="/mobilier/chevet" component={() => <App details='mobilier1' />} />
                <Route path="/mobilier/console" component={() => <App details='mobilier2'/>} />
                <Route path="/mobilier/fauteuil" component={() => <App details='mobilier3'/>} />
                <Route path="/mobilier/sdb" component={() => <App details='mobilier4'/>} />
                <Route path="/mobilier/chaise" component={() => <App details='mobilier5'/>} />
                <Route path='/sketches' component={() => <Template3  details='mobilier3'/>}/>
                <Route exact path="/interior" component={() => < Template2 details='remplissage' />} />
                <Route path="/interior/resto" component={Construction} />
                <Route path="/contact" component={Construction} />
            </Switch>
        </BrowserRouter>
    </Fragment>
)
ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
