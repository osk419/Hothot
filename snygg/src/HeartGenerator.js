import React from 'react';
import Heart from './Heart.js'
import './App.css';

const nbrOfHearts = 320;
const size = 24
class HeartGenerator extends React.Component {

    constructor(props) {
        super()
        this.state = { heartList: [<Heart/>] }
        for (let index = 0; index < nbrOfHearts; index++) {
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