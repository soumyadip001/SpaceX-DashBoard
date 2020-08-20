import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import PropTypes from 'prop-types';

import reducer from '../store/reducer';
const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);

MyApp.propTypes = {
    Component: PropTypes.object.isRequired,
    pageProps: PropTypes.object.isRequired,
};

export default function MyApp ({ Component, pageProps }) {
    return <Provider store={store}>
        <Component {...pageProps} />
    </Provider>;
}