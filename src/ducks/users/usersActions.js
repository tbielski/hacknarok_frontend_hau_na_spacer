import axios from "axios";
import {
    USERS_SUCCESS,
    USERS_FAILURE,
    USERS_REQUEST,
    USERS_ADD_DOG,
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
                  payload: dog,
              })
            : alert("Something went wrong");
    } catch (e) {
        console.log(e);
    }
};
const actions = { login, register, addDog };
export default actions;
