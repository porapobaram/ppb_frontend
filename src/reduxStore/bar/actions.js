import { barApi } from "../../service/api/bar";
import { GET_RANDOM_BAR } from "./actionTypes";

export const getRandomBar = () => async dispatch => {
  const data = await barApi.getRandomBar();
  console.log(data);
  dispatch({ type: GET_RANDOM_BAR, data });
};
