import React from 'react';
import hothot from './hothot.png'
import kiss from './kiss.svg'
import Kiss from './Kiss.js'
import './App.css';

class Hothot extends React.Component {

    constructor(props) {
        super()
        this.state = { kisses: [] }
    }

    createKiss = (e) => {
        e.persist()
        this.setState((prevState) => ({kisses: [...prevState.kisses, <Kiss position={{x: e.clientX-16, y: e.clientY-16}}/>]}))
    }

    render() {
        return (
            <>
                <img className='hothot' onClick={this.createKiss.bind(this)} src={hothot} style={{zIndex: 1, transform: `scale(${0.5})`}}></img>
                <img className='hothot-glow' src={hothot} style={{zIndex: 0.5, transform: `scale(${0.5})`}}></img>    
                {this.state.kisses}
                <b className='love-counter'> Love Counter: {this.state.kisses.length} </b> 
            </>
        )
    }
}

export default Hothot;