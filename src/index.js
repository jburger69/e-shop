import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import ProductsReducer from './reducers/ProductsReducer';
import thunk from 'redux-thunk';

const store = createStore(ProductsReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  </React.StrictMode>
)
