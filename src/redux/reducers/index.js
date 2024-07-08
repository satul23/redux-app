import { combineReducers} from 'redux';
import { productreducer } from './productReducer';

export const reducers = combineReducers({
    allProducts: productreducer
}) 
