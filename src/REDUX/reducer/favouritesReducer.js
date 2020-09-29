import { FAVOURITES_CHECK,
         ADD_FAVOURITE_VACANCY,
         DEL_FAVOURITE_VACANCY} from '../types';

const favouritesState = localStorage.length != 0 ? 
                        JSON.parse(localStorage.getItem('reduxState')) :
                        { favouritesList: [] }

export function favouritesReducer(state = favouritesState, action) {
    switch(action.type) {
        case FAVOURITES_CHECK:
            return{...state, favouritesList: action.payload}

        case ADD_FAVOURITE_VACANCY:
            return {...state, favouritesList: state.favouritesList.push(action.payload)}

        case DEL_FAVOURITE_VACANCY:
            return {...state}

        default: return state
    }
}