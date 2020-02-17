import React from 'react';
import heart1 from './heart-filled.svg';
import heart2 from './heart.svg'
import './App.css';

const size = 24
class Heart extends React.Component {

    constructor(props) {
        super()
        this.state = { left: Math.random()*1920, top: Math.random()*1080, scale: 0}//Math.random()*2+1 }
    }

    render() {
        return (
            <img 
                className='heart'
                style={{
                    transform: `scale(${this.state.scale})`, 
                    left: this.state.left, 
                    top: this.state.top, 
                    animationDuration: `${Math.random()*3+2}s`, 
                    animationDelay: `${Math.random()*-100}s`
                }} 
                src={Math.random() < 0.8 ? heart1 : heart2}
            />
        )
    }
}

export default Heart;