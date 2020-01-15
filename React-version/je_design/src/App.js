import React, { Component} from 'react'
import Template1 from './Components/Template1/Template1'

//import des éléments du mobilier
import mobiliers from './mobilier'

class App extends Component {
  state= {
    details: this.props.details,
    mobilier: {...mobiliers}
  }

  render () {
    return (
      <div>
        <Template1 
          className="container" 
          img={this.state.mobilier[this.state.details].images}  
          title={this.state.mobilier[this.state.details].title} 
          name={this.state.mobilier[this.state.details].name} 
          content={this.state.mobilier[this.state.details].content} 
          verticalImg={this.state.mobilier[this.state.details].verticale}
        />
      </div>
    )
  }

}

export default App;
