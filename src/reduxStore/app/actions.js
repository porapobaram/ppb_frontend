import * as actionTypes from './actionTypes';
import {barApi} from "../../service/api/bar";

export const setInitialState = (data) => (dispatch) => {
    dispatch({type: actionTypes.SET_INITIAL_STATE, data:data})
};

export const userUseRandomize = async () => {
    const data = barApi.getRandomBar();
    console.log(data);
};