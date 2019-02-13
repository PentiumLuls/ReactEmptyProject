import React from "react";
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/terminal';

export class CodeEditor extends React.Component {

    onChange = (newValue) => {

    };

    render() {
        return (
            <AceEditor
                mode="java"
                theme="terminal"
                onChange={this.onChange}
                name="UNIQUE_ID_OF_DIV"
                defaultValue="DEFAULT CODE"
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