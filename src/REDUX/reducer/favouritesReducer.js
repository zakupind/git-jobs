import { FAVOURITES_CHECK,
         ADD_FAVOURITE_VACANCY,
         DEL_FAVOURITE_VACANCY} from '../types';

const favouritesState = {
    countFavourites: 0,
    favouritesList: []
}

export function favouritesReducer(state = favouritesState, action) {
    switch(action.type) {
        case FAVOURITES_CHECK:
            return{...state, favouritesList: action.payload}

        case ADD_FAVOURITE_VACANCY:
            return {...state, countFavourites: state.countFavourites + 1}

        case DEL_FAVOURITE_VACANCY:
            return {...state}

        default: return state
    }
}