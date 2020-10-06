import {
  FAVOURITES_CHECK,
  ADD_FAVOURITE_VACANCY,
  DEL_FAVOURITE_VACANCY,
} from '../types';

export const favouritesState = {
  favouritesList: [
    {
      id: '421871bb-05d3-4fbe-b00c-3f372fa35584',
      title: 'Javascript Engineer',
      url: 'https://jobs.github.com/positions/421871bb-05d3-4fbe-b00c-3f372fa35584',
    },
    {
      id: 'e67565ea-dd62-4444-8ebe-416b42adac3b',
      title: 'Fullstack API Engineer/Integrations Specialist (Remote OK)',
      url: 'https://jobs.github.com/positions/e67565ea-dd62-4444-8ebe-416b42adac3b',
    },
    {
      id: '76fcca6f-7cb7-45fb-94c6-04ad68305479',
      title: 'Product Engineer ',
      url: 'https://jobs.github.com/positions/76fcca6f-7cb7-45fb-94c6-04ad68305479',
    },
  ],
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
