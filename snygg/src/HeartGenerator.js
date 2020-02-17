import React from 'react';
import Heart from './Heart.js'
import './App.css';

const nbrOfHearts = 663552000;
const size = 24
const width = window.screen.width * window.devicePixelRatio
const height = window.screen.height * window.devicePixelRatio
class HeartGenerator extends React.Component {

    constructor(props) {
        super()
        this.state = { heartList: [<Heart/>] }
        for (let index = 0; index < nbrOfHearts/(width*height); index++) {
            this.state.heartList.push(<Heart/>)
        }
    }

    render() {
        return (
            this.state.heartList
        )
    }
}

export default HeartGenerator;