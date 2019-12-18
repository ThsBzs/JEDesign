import React, {Component} from 'react';
import Picturecontainer from './Picturecontainer'
import Textcontainer from './Textcontainer.js'
import '../App.css';

class Container extends Component {
    render(){
        return(
            <div className="container">
                <Picturecontainer 
                />
                <Textcontainer 
                />
            </div>
        )
    }


}

export default Container;