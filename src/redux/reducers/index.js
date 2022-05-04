
import { combineReducers } from 'redux';
import pizzasReducer from './pizzas';
import filters from './filters';

const rootReducer = combineReducers({
   pizzas:pizzasReducer,
   filters
   
})
export default rootReducer;