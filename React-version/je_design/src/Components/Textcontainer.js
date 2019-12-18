import React, {Component} from 'react';
import '../App.css';

class Textcontainer extends Component {
    state = {
        title: 'Je te fais des meubles, ma caille ?',
        content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ex numquam tempora, officia quo sit doloribus ut soluta laborum excepturi ea omnis aut dolorem provident quibusdam expedita quia alias? Vel. Adipisci at voluptatibus officia minima odio obcaecati natus nihil itaque, mollitia saepe odit culpa commodi sed repellat delectus eligendi dolorum voluptates repudiandae modi unde illo dolor. Vero natus alias nostrum. Cum quod neque, incidunt expedita qui eius nobis, sit ea laudantium nesciunt magni assumenda fugiat! 
        Repellendus inventore quasi saepe rem impedit repellat deserunt iure fugit perspiciatis a, ullam minima quam voluptate.`
    }

    render() {
        return(
            <div className='text'>
                <p>{this.state.title}</p>
                <p>{this.state.content}</p>
            </div>
        )
    }
}

export default Textcontainer;