import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';

import index from "./js/index" //DO NOT REMOVE
import {Provider} from "react-redux";
import store from "./js/store";

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));