import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import favouritesReducer from './favouritesReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  favourites: favouritesReducer,
});

export default rootReducer;
