import React, {Component} from 'react';
import './App.css';
import {CodeEditor} from "../codeEditor/codeEditor";

class App extends Component {
    render() {
        return (
            <div className="App">
                <CodeEditor/>
            </div>
        );
    }
}

export default App;
