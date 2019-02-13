import * as React from "react";
import './levelFrame.css';

export class LevelFrame extends React.Component {
    render() {
        return (
            <canvas width="600" height="500" contentEditable="true" className="levelFrame"/>
        );
    }
}