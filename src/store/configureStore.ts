import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import { legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';
import {rootReducer} from '../reducers/rootReducer'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


export {store};