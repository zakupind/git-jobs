import searchReducer from './searchReducer';
import {
  searchSuccess,
  searchNull,
  searchNotResult,
  searchOnload,
} from '../action';

describe('test searchReducer', () => {
  const stateSearch = {
    jobs: [],
    isFetching: false,
    statusSearch: '',
  };

  const payload = [
    {
      title: 'job1',
    },
    {
      title: 'job2',
    },
  ];

  it('получили ответ от сервера', () => {
    expect(searchReducer(stateSearch,
      searchSuccess(payload)))
      .toEqual({ ...stateSearch, jobs: payload, statusSearch: 'Результаты поиска' });
  });

  it('вакансии по запросу не были найдены', () => {
    expect(searchReducer(stateSearch,
      searchNotResult()))
      .toEqual({ ...stateSearch, statusSearch: 'Вакансии по вашему запросу не найдены' });
  });

  it('ответ на пустой запрос', () => {
    expect(searchReducer(stateSearch,
      searchNull()))
      .toEqual({ ...stateSearch, statusSearch: 'Введите данные в поля ввода' });
  });

  it('ожидание ответа от сервера', () => {
    expect(searchReducer(stateSearch,
      searchOnload()))
      .toEqual({ ...stateSearch, isFetching: true });
  });
});
