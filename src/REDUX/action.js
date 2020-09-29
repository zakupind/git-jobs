import { HANDLE_CHANGE_SEARCH,
         SUCCESS_SEARCH,
         FAVOURITES_CHECK,
         ADD_FAVOURITE_VACANCY,
         DEL_FAVOURITE_VACANCY } from './types';

export function handleChangeSearch(payload) {
    return {
        type: HANDLE_CHANGE_SEARCH,
        payload
    }
};

export function searchSuccess(payload) {
    return {
        type: SUCCESS_SEARCH,
        payload
    }
}

export function searchSubmit(description, location, fullTime) {
    const url = `http://localhost:7000/api?description=${description}&location=${location}&full_time=${fullTime}`;

    return (dispatch) => {
        fetch(url)
        .then(response => response.ok ? response : Promise.reject(response))
        .then(response => response.json())
        .then(response => dispatch(searchSuccess(response)))
        .catch(console.log)
    }
}

export function checkFavorites() {
    let count = localStorage.length;
    let favourites = [];

    if (count != 0) {
        let i = 0;
        while (i < count) {
            let key = localStorage.key(i);
            let l = JSON.parse(localStorage.getItem(key));
            i++;
            favourites.push(l)
        } 
    } else {
        console.log('Нет избранных вакансий')
    }

    return {
        type: FAVOURITES_CHECK,
        payload: favourites
    }
}

export function addFavourites(payload) {
    return {
        type: ADD_FAVOURITE_VACANCY,
        payload
    }
}

export function delFavourites(key) {
    localStorage.removeItem(key)
    return {
        type: DEL_FAVOURITE_VACANCY
    }
}
