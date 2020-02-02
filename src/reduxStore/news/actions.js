import { GET_ALL_NEWS } from "./actionTypes";
import { barNewsApi } from "../../service/api/news";

export const getNewsFeed = () => async dispatch => {
  const data = await barNewsApi.getNewsFeed();
  dispatch({ type: GET_ALL_NEWS, data });
};
