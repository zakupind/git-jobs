import favouritesReducer, { favouritesState } from './favouritesReducer';
import { addFavourites, delFavourites } from '../action';

const addNotNewVacancies = {
  id: '421871bb-05d3-4fbe-b00c-3f372fa35584',
  title: 'Javascript Engineer',
  url: 'https://jobs.github.com/positions/421871bb-05d3-4fbe-b00c-3f372fa35584',
};

const addNewVacancies = {
  id: 'abcd-345-bca',
  title: 'Javascript Engineer',
  url: 'https://jobs.github.com/positions/421871bb-05d3-4fbe-b00c-3f372fa35584',
};

const stateTest = {
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
    {
      id: 'abcd-345-bca',
      title: 'Javascript Engineer',
      url: 'https://jobs.github.com/positions/421871bb-05d3-4fbe-b00c-3f372fa35584',
    },
  ],
};

it('Тест добавление новой вакансии', () => {
  expect(favouritesReducer(favouritesState,
    addFavourites(addNewVacancies)))
    .toEqual(stateTest);
});

it('Тест добавление уже имеющейся вакансии', () => {
  expect(favouritesReducer(favouritesState,
    addFavourites(addNotNewVacancies)))
    .toEqual({ ...favouritesState });
});

it('Удаление из избранных', () => {
  expect(favouritesReducer(favouritesState,
    delFavourites('abcd-345-bca')))
    .toEqual({...stateTest, favouritesList: stateTest.favouritesList.slice(0, 3)});
})
