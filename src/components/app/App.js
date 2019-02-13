import React, {Component} from 'react';
import {saveUserCode} from "../../js/actions";
import {connect} from "react-redux";

import './App.css';
import {CodeEditor} from "../codeEditor/codeEditor";
import {LevelFrame} from "../levelFrame/LevelFrame";

class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="levelPanel">
                    <div className="levelFrameBox">
                        <div className="levelInfoBox">
                            <p>current level = {this.props.currentLevel}</p>
                        </div>
                        <LevelFrame/>
                        <div className="levelButtons">
                            <button>^1 API</button>
                            <button>^2 TOGGLE WINDOW</button>
                            <button>^3 RUN</button>
                            <button>^0 MENU</button>
                        </div>
                    </div>
                    <CodeEditor/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        userCode: store.userCode,
        currentLevel: store.currentLevel,
        passLevels: store.passLevels,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        saveUserCode: newCode => dispatch(saveUserCode(newCode))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
