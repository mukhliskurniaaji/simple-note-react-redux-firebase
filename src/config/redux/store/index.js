import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../../config/redux/reducer';

// 1. MEMBUAT STORE :
export const store = createStore(reducer, applyMiddleware(thunk));
// Redux thank berguna untuk menjalankan async pada dispach