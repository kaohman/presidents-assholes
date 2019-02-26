import { combineReducers } from 'redux';
import presidentsReducer from './presidentsReducer';

const rootReducer = combineReducers({
  presidents: presidentsReducer
});

export default rootReducer;