import { combineReducers } from 'redux';
import presidentsReducer from './presidentsReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import partyReducer from './partyReducer';

const rootReducer = combineReducers({
  presidents: presidentsReducer,
  loading: loadingReducer,
  error: errorReducer,
  party: partyReducer
});

export default rootReducer;