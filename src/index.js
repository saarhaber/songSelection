import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import reducers from './reducers'

ReactDOM.render( <Router basename = "/songSelection">
    <Provider store={createStore(reducers)}>
        <App/>
      </Provider>
      </Router>
, document.querySelector('#root')
);