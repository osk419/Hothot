import React from "react";
import heart1 from "./heart-filled.svg";
import heart2 from "./heart.svg";
import "./App.css";

const width = window.screen.width * window.devicePixelRatio;
const height = window.screen.height * window.devicePixelRatio;
const size = 240

class Heart extends React.Component {
    constructor(props) {
        super();
        this.state = {
            left: Math.random() * width - 240,
            top: Math.random() * height -240,
            scale: 0
        };
    }

    render() {
        return (
            <img
                className="heart"
                style={{
                    transform: `scale(${this.state.scale})`,
                    left: this.state.left,
                    top: this.state.top,
                    animationDuration: `${Math.random() * 3 + 2}s`,
                    animationDelay: `${Math.random() * -100}s`
                }}
                src={Math.random() < 0.8 ? heart1 : heart2}
            />
        );
    }
}

export default Heart;
