import { SUCCESS_SEARCH,
         NULL_SEARCH,
         NOT_RESULT_SEARCH,
         ONLOAD_SEARCH } from '../types';

const stateSearch = {
    jobs: [],
    isFetching: false,
    statusSearch: ''
}

export function searchReducer(state = stateSearch, action) {
    switch (action.type) {
        case ONLOAD_SEARCH:
            return {...state, isFetching: true, statusSearch: ''}
        case NULL_SEARCH:
            return {...state, jobs: [], statusSearch: 'Введите данные в поля ввода'}
        case NOT_RESULT_SEARCH:
            return {...state, jobs: [], statusSearch: 'Вакансии по вашему запросу не найдены', isFetching: false}
        case SUCCESS_SEARCH:
            return {...state, jobs: action.payload, statusSearch: 'Результаты поиска', isFetching: false}
        
        default: return state
    }
}