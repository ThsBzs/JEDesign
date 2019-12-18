import React, {Component} from 'react'
import Nav from './Components/Nav.js'
import Container from './Components/Container.js'

class App extends Component {
  render() {
    return (
      <div>
      <Nav />
      <Container 
        className="container"
      />
      </div>
    )
  }
}

export default App;
