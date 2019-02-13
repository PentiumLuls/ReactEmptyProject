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
                    <LevelFrame/>
                    <CodeEditor/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {userCode: store.userCode};
};

function mapDispatchToProps(dispatch) {
    return {
        saveUserCode: newCode => dispatch(saveUserCode(newCode))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
