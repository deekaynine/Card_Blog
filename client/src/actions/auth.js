import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

//reduxthunk

//form calls the functions
export const signin = (formData, router) => async (dispatch) => {
  try {
    //then gets destructured data from api
    const { data } = await api.signIn(formData);

    //then dispatch calls the reducer
    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    //then dispatch calls the reducer
    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
