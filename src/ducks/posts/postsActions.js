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

export const volunteer = async (userId, postId) => {
  try {
    const res = await axios.post(`http://localhost:5000/posts/add-response`, { userId, postId });
  } catch (e) {
    console.log(e);
  }
};


