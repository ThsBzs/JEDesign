import React, { Fragment, Component } from 'react'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import Page from './Components/Page'

import './App.css'

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
          <section className='page'>
            <section className='page-wrap'>
              <Nav />
              <Page />
            </section>
            <Footer />
          </section>
      </Fragment>
    )
  }
}

export default App;
