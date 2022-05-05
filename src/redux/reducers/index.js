
import { combineReducers } from 'redux';
import pizzasReducer from './pizzas';
import filters from './filters';
import cart from './cart';
const rootReducer = combineReducers({
   pizzas:pizzasReducer,
   filters,
   cart
   
})
export default rootReducer;