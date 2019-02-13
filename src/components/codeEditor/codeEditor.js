import React from "react";
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/terminal';
import {saveUserCode} from "../../js/actions";
import {connect} from "react-redux";

class CodeEditor extends React.Component {

    onChange = (newValue) => {
        this.props.saveUserCode(newValue);
    };

    componentDidMount() {
        this.props.saveUserCode(this.props.defaultLevelCode);
    }

    render() {
        return (
            <AceEditor
                mode="java"
                theme="terminal"
                onChange={this.onChange}
                name="UNIQUE_ID_OF_DIV"
                defaultValue={this.props.defaultLevelCode}
                value={this.props.userCode}
                editorProps={{$blockScrolling: true}}
                fontSize='20px'
                //enableBasicAutocompletion={true}
                //enableLiveAutocompletion={true}
                style={{position: 'relative'}}
                commands={[{   // commands is array of key bindings.
                    name: 'runCode', //name for the key binding.
                    bindKey: {/*win: this.props.hotKey, mac: this.props.hotKey*/},
                    exec: () => { /*this.props.run() */}  //function to execute when keys are pressed.
                }]}
                setOptions={{
                    autoScrollEditorIntoView: true,
                    highlightActiveLine: false

                }}
                ref={instance => {
                    this.ace = instance;
                }} // Let's put things into scope
            />
        );
    }
}

const mapStateToProps = store => {
    return {
        userCode: store.userCode,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        saveUserCode: newCode => dispatch(saveUserCode(newCode))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeEditor);