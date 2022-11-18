import { createStore, combineReducers} from 'redux';
import Reducer from './Reducer';
 
const rootReducer = combineReducers({
  reducer: Reducer,
});
 
export const store = createStore(rootReducer);