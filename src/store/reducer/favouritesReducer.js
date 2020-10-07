import {
  ADD_FAVOURITE_VACANCY,
  DEL_FAVOURITE_VACANCY,
} from '../types';

export const favouritesState = {
  favouritesList: {},
};

export default function favouritesReducer(state = favouritesState, action) {
  switch (action.type) {
    case ADD_FAVOURITE_VACANCY: {
      const { payload } = action;

      return {
        ...state,
        favouritesList: { ...state.favouritesList, [payload.id]: { ...payload } },
      };
    }

    case DEL_FAVOURITE_VACANCY: {
      const { favouritesList } = state;

      const newFavouriteList = { ...favouritesList };
      delete newFavouriteList[action.payload];

      return {
        ...state, favouritesList: newFavouriteList,
      };
    }
    default: return state;
  }
}
