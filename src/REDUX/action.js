import { SUCCESS_SEARCH,
         ONLOAD_SEARCH,
         NULL_SEARCH,
         NOT_RESULT_SEARCH,
         FAVOURITES_CHECK,
         ADD_FAVOURITE_VACANCY,
         DEL_FAVOURITE_VACANCY, } from './types';

export function searchSuccess(payload) {
    return {
        type: SUCCESS_SEARCH,
        payload
    }
}

export function searchNull() {
    return {
        type: NULL_SEARCH
    }
}

export function searchNotResult() {
    return {
        type: NOT_RESULT_SEARCH
    }
}

export function searchOnload() {
    return {
        type: ONLOAD_SEARCH
    }
}

export function searchSubmit(payload) {
    const url = `http://localhost:7000/api?description=${payload.description}&location=${payload.location}&full_time=${payload.fullTime}`;

    return (dispatch) => {
        dispatch(searchOnload())
        fetch(url)
        .then(response => response.ok ? response : Promise.reject(response))
        .then(response => response.json())
        .then(response => { if (response.length == 0) {
                dispatch(searchNotResult())
            } else {
                dispatch(searchSuccess(response))
            }
        })
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
            let item = JSON.parse(localStorage.getItem(key));
            i++;
            favourites.push(item)
        } 
    }

    return {
        type: FAVOURITES_CHECK,
        payload: favourites
    }
}

export function addFavourites(payload) {
    localStorage.setItem(payload.id, JSON.stringify(payload));
    
    return {
        type: ADD_FAVOURITE_VACANCY,
        payload
    }
}

export function delFavourites(key) {
    localStorage.removeItem(key);

    return {
        type: DEL_FAVOURITE_VACANCY,
        payload: key
    }
}
