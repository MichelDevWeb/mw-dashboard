import authSlice from "redux/authSlice.js";
import { AUTH } from "share/constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch(authSlice.actions.login(data));

    router.push("/admin/index");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch(authSlice.actions.login(data));

    router.push("/auth/login");
  } catch (error) {
    console.log(error);
  }
};
