import { combineReducers } from 'redux';
import serviceReducer from './service.reducer';
import orderReducer from './order.reducer';

const rootReducer = combineReducers({
  service: serviceReducer,
  order: orderReducer,
});
export default rootReducer;
