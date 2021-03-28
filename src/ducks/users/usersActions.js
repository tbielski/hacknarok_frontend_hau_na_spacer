import axios from "axios";
import {

    USERS_SUCCESS,
    USERS_FAILURE,
    USERS_REQUEST,
    USERS_ADD_DOG,
    USERS_ADD_POST,
    USERS_EDIT_DESC,
    DOG_EDIT,
    DELETE_DOG,

} from "./types";

const login = (credentials) => async (dispatch) => {
  try {
    const res = await axios.post(`http://localhost:5000/users/logging`, {
      ...credentials,
    });
    dispatch({
      type: USERS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

const register = async (credentials) => {
  try {
    const res = await axios.post(`http://localhost:5000/users/add-user`, {
      ...credentials,
    });
    if (res) {
      alert("Użytkownik zarejestrowany poprawnie!");
    } else {
      alert("Rejestracja się nie powiodła!");
    }
  } catch (e) {
    console.log(e);
  }
};
const addDog = (dog) => async (dispatch) => {
    try {
        const res = await axios.post(`http://localhost:5000/dogs/add-dog`, dog);
        console.log(res);
        res.data
            ? dispatch({
                  type: USERS_ADD_DOG,
                  payload: res.data,
              })
            : alert("Something went wrong");
    } catch (e) {
        console.log(e);
    }
};

const addPost = (post) => async (dispatch) => {
    try {
        console.log(post);
        const res = await axios.post(
            `http://localhost:5000/posts/add-post`,
            post
        );
        console.log(res);
        res.data
            ? dispatch({
                  type: USERS_ADD_POST,
                  payload: res.data,
              })
            : alert("Something went wrong");
    } catch (e) {
        console.log(e);
    }
};



const editUserDesc = (idUser, describeUser) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:5000/users/edit-user`, {
      idUser,
      describeUser,
    });
    dispatch({
      type: USERS_EDIT_DESC,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

const editDog = (dogId, values) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:5000/dogs/edit-dog`, {
      dogId,
      ...values,
    });
    dispatch({
      type: DOG_EDIT,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

const deleteDog = (dogId, authorId) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `http://localhost:5000/dogs/delete-dog`,
      {dogId, authorId}
    );
    dispatch({
      type: DELETE_DOG,
      payload: dogId,
    });
  } catch (e) {
    console.log(e);
  }
};

const actions = { login, register, addDog, editUserDesc, editDog, deleteDog,addPost };

export default actions;
