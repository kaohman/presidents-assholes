import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../src/reducers'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
