import {
  FAVOURITES_CHECK,
  ADD_FAVOURITE_VACANCY,
  DEL_FAVOURITE_VACANCY,
} from '../types';

const favouritesState = {
  favouritesList: [],
};

export default function favouritesReducer(state = favouritesState, action) {
  switch (action.type) {
    case FAVOURITES_CHECK:
      return { ...state, favouritesList: action.payload };

    case ADD_FAVOURITE_VACANCY: {
      const check = state.favouritesList.some((element) => element.id === action.payload.id);

      if (check) {
        return { ...state };
      }
      return { ...state, favouritesList: [...state.favouritesList, action.payload] };
    }

    case DEL_FAVOURITE_VACANCY: {
      return {
        ...state,
        favouritesList: state.favouritesList.filter((item) => item.id !== action.payload),
      };
    }

    default: return state;
  }
}