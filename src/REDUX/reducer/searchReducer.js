import { HANDLE_CHANGE_SEARCH,
         SUCCESS_SEARCH } from '../types';

const stateSearch = {
    description: '',
    location: '',
    fullTime: false,
    jobs: []
}

export function searchReducer(state = stateSearch, action) {
    switch (action.type) {
        case HANDLE_CHANGE_SEARCH:
            if (action.payload.name === 'fullTime') {
                return {...state, fullTime: !state.fullTime}
            } else {
                return {...state, [action.payload.name]: action.payload.value}
            }

        case SUCCESS_SEARCH:
            return {...state, jobs: action.payload}
        
        default: return state
    }
}