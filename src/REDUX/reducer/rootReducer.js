import { combineReducers } from 'redux';

import { searchReducer } from './searchReducer';
import { favouritesReducer } from './favouritesReducer';

export const rootReducer = combineReducers ({
    search: searchReducer,
    favourites: favouritesReducer
})