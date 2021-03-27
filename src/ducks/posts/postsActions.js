import axios from "axios";
import { POSTS_SUCCESS } from "./types";

export const getAllPosts = () => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:5000/posts/all-posts`);
    dispatch({
      type: POSTS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

