import React from 'react';
import hothot from './hothot.png'
import kiss from './kiss.svg'
import './App.css';

class Kiss extends React.Component {

    constructor(props) {
        super()
    }


    render() {
        return (
            <>
                <img className='kiss' style={{left: this.props.position.x, top: this.props.position.y}} src={kiss}></img>    
            </>
        )
    }
}

export default Kiss;