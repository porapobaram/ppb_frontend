import * as actionTypes from './actionTypes';

export const setInitialState = (data) => (dispatch) => {
    dispatch({type: actionTypes.SET_INITIAL_STATE, data:data})
};

export const getRandomBar = () => {
fetch(`УРЛА ОТ АНДРЮХИ`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log('Request successful', data);
        return data;
    })
    .catch(function(error) {
        console.log('Request failed', error)
    });
};