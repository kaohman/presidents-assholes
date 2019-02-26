import { combineReducers } from 'redux';
import presidentsReducer from './presidentsReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  presidents: presidentsReducer,
  loading: loadingReducer,
  error: errorReducer
});

export default rootReducer;