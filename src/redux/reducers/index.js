
import { combineReducers } from 'redux';
import pizzasReducer from './pizzas';
import filtersReducer from './filters';

const rootReducer = combineReducers({
   pizzas:pizzasReducer,
   sortBy:filtersReducer
   
})
export default rootReducer;