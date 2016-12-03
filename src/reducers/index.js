import { combineReducers } from 'redux';
import chuck from './chuckNorrisReducer';
import another  from './anotherReducer';

export default combineReducers({
  chuck,
  another
})
