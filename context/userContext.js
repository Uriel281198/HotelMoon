export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const REGISTER_USER = "REGISTER_USER";
export const REFETCH_USER = "REFETCH_USER";

import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, {
  createContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { api } from "../services/api";
import userReducer from "./userReducer";

export const userContext = createContext();

const UserWrapper = ({ children }) => {
  const router = useRouter();

  const initialState = {
    isUser: false,
    token_user: null,
    id_user: null,
    isLogged_User: false,
    isLoading: true,
    userData: null,
    photo: null,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    console.log("load data");
    const token = Cookies.get("token_user");
    const id_user = Cookies.get("id_user");

    if (token !== undefined) {
      api.defaults.headers.common["X-Parse-Session-Token"] = token;
      try {
        let userValid = await api.get(`users/me`);
        const { objectId, sessionToken, name, lastname, email, username } =
          userValid.data;

        dispatch({
          type: LOGIN_USER,
          payload: {
            token_user: sessionToken,
            id_user: objectId,
            isUser: true,
            isLogged_User: true,
            userData: userValid.data,
            isLoading: false,
          },
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("no local");
      dispatch({
        type: LOGIN_USER,
        payload: {
          token_user: null,
          id_user: null,
          id_candidate: null,
          isUser: false,
          isLogged_User: false,
          isLoading: false,
          userData: null,
        },
      });
    }
  };

  const LoginUser = async (payload) => {
    console.log("login user");

    const { objectId, sessionToken, name, lastname, email, username } = payload;
    
    try {
      if (sessionToken) {
        console.log("got token user");
        Cookies.set("token_user", sessionToken, { expires: 60 });
        Cookies.set("id_user", objectId, { expires: 60 });
        dispatch({
          type: LOGIN_USER,
          payload: {
            token_user: sessionToken,
            id_user: objectId,
            isUser: true,
            isLogged_User: true,
            isLoading: false,
            userData: payload,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const RegisterUser = async (payload) => {
    console.log(payload);

    try {
      if (payload.data.sessionToken) {
        console.log("got token user");
        Cookies.set("token_user", payload.data.sessionToken, { expires: 60 });
        Cookies.set("id_user", payload.data.objectId, { expires: 60 });
        api.defaults.headers.common["X-Parse-Session-Token"] =
          payload.data.sessionToken;

        let userValid = await api.get(`users/me`);
        const { objectId, sessionToken, name, lastname, email, username } =
          userValid.data;

        dispatch({
          type: REGISTER_USER,
          payload: {
            isUser: true,
            token_user: sessionToken,
            id_user: objectId,
            isLogged_User: true,
            isLoading: false,
            userData: payload.data,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const LogoutUser = (payload) => {
    console.log("logout");
    Cookies.remove("token_user");
    Cookies.remove("id_user");
    delete api.defaults.headers.common["X-Parse-Session-Token"];
    window.location.pathname = "/";
    dispatch({
      type: LOGOUT_USER,
      payload: {
        isUser: false,
        token_user: null,
        id_user: null,
        isLogged_User: false,
        isLoading: false,
        userData: null,
      },
    });
  };

  const RefetchUser = async (objectId) => {
    try {
      let userValid = await api.get(`users/me`);
      const { objectId, name, lastname, email, username } = userValid.data;

      dispatch({
        type: REFETCH_USER,
        payload: {
          userData: userValid.data,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <userContext.Provider
      value={{
        isUser: state.isUser,
        token_user: state.token_user,
        id_user: state.id_user,
        isLogged_User: state.isLogged_User,
        isLoading: state.isLoading,
        userData: state.userData,
        RegisterUser,
        LogoutUser,
        LoginUser,
        RefetchUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserWrapper;
