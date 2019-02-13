import React, {Component} from 'react';
import {saveUserCode, unlockNextLevelState} from "../../js/actions";
import {connect} from "react-redux";

import './App.css';
import CodeEditor from "../codeEditor/codeEditor";
import {LevelFrame} from "../levelFrame/LevelFrame";
import {levels} from "../../levels/levels";

class App extends Component {

    unlockNextLevel() {
        this.props.unlockNextLevelState();
    }

    run() {
        try {
            const vm = require('vm');
            const codeToEvaluate = this.props.userCode;
            if (vm.runInThisContext(codeToEvaluate) === true) {
                this.unlockNextLevel();
                console.log("SUCCESSFUL RUN");
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className="App">
                <div className="levelPanel">
                    <div className="levelFrameBox">
                        <div className="levelInfoBox">
                            <p>{levels[this.props.currentStage][this.props.currentLevel].title}</p>
                        </div>
                        <LevelFrame/>
                        <div className="levelButtons">
                            <button>^1 API</button>
                            <button>^2 TOGGLE WINDOW</button>
                            <button onClick={this.run.bind(this)}>^3 RUN</button>
                            <button>^0 MENU</button>
                        </div>
                    </div>
                    <CodeEditor
                        defaultLevelCode={levels[this.props.currentStage][this.props.currentLevel].code}
                    />
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
        currentStage: store.currentStage,
        passStages: store.passStages,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        unlockNextLevelState: () => dispatch(unlockNextLevelState()),
        saveUserCode: newCode => dispatch(saveUserCode(newCode))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
