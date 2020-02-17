import React from 'react';
import kiss from './kiss.svg'
import heart from "./heart-filled.svg";
import './App.css';

class Kiss extends React.Component {

    constructor(props) {
        super()
    }


    render() {
        return (
            <>
                <img className='kiss' style={{left: this.props.position.x, top: this.props.position.y}} src={kiss}></img> 
                <img className='kiss-heart' style={{left: this.props.position.x, top: this.props.position.y}} src={heart}></img> 
            </>
        )
    }
}

export default Kiss;