import React, { Component} from 'react'
import Container from './Components/Container/Container'

//import des éléments du mobilier
import mobiliers from './mobilier'

class App extends Component {
  state= {
    details: this.props.details,
    mobilier: {...mobiliers}
  }

  render () {
    const img = this.state.mobilier[this.state.details].images

    const title = this.state.mobilier[this.state.details].title

    const name = this.state.mobilier[this.state.details].name
  
    const content = this.state.mobilier[this.state.details].content

    const verticalImg = this.state.mobilier[this.state.details].verticale

    return (
      <div>
        <Container 
          className="container" img={img}  title={title} name={name} content={content} verticalImg={verticalImg}
        />
      </div>
    )
  }

}

export default App;
