import React, {Component, Fragment} from 'react';
import '../App.css';

class Picturecontainer extends Component {
    state = {
        img1 : require('../images/mobilier/MOBILIER-Console-Line1.jpg'),
        img2 : require('../images/mobilier/MOBILIER-SDB-1.jpg'),
        img3 : require('../images/mobilier/MOBILIER-Chevet-1.jpg'),
        img4 : require('../images/mobilier/MOBILIER-Fauteuil-Square-1.jpg')

    }

    render (){
        return(
            <Fragment>
                <div className="pictures">
                    <img src={this.state.img1} alt="console"></img>
                    <img src={this.state.img2} alt="sdb"></img>
                    <img src={this.state.img3} alt="chevet"></img>
                    <img src={this.state.img4} alt="fauteuil"></img>
                </div>
            </Fragment>
        )
    }
}

export default Picturecontainer;    