import { createContext, useEffect, useReducer } from "react";
import loginReducer from "./loginReducer";
import Cookies from "js-cookie";
import { api } from "../services/api";
export const appContext = createContext();

export const LOGIN = "LOGIN";
export const LOGIN_COMPANY = "LOGIN_COMPANY";
export const LOGOUT_COMPANY = "LOGOUT_COMPANY";
export const REGISTER_COMPANY = "REGISTER_COMPANY";

const AppWrapper = ({ children }) => {
  const initialState = {
    isLogged_company: false,
    isCompany: false,
    token_company: null,
    id_company: null,
    isLogeed: false,
    token_user: null,
    isLoading_company: true,
  };
  const [state, dispatch] = useReducer(loginReducer, initialState);

  useEffect(() => {
    console.log("init app");
    async function loadUserFromCookies() {
      const token = Cookies.get("token_company");
      if (!token)  return;                
        api.defaults.headers.common["X-Parse-Session-Token"] = token;        
        try {
          let response = await api.get("users/me");
          const { objectId, sessionToken } = response.data;
          dispatch({
            type: REGISTER_COMPANY,
            payload: {
              isLogged_company: true,
              token_company: sessionToken,
              id_company: objectId,
              isCompany: true,
              isLoading_company: false,
            },
          });          
        } catch (error) {
          console.log(error);
        }
        console.log(token);
      
    }
    loadUserFromCookies();
  }, []);

  const LogoutCompany = (payload) => {
    Cookies.remove("token_company");
    Cookies.remove("id_company");
    delete api.defaults.headers.common["X-Parse-Session-Token"]
    window.location.pathname = "/soyempresa";
    dispatch({
      type: LOGOUT_COMPANY,
      payload: {
        isLogged_company: false,
        token_company: null,
        id_company: null,
        isCompany: false,
        isLoading_company: false,
      },
    });
  };

  const LoginCompany = async (payload) => {
    const { sessionToken, objectId } = payload;
    try {
      if (sessionToken) {
        console.log("Got token");
        Cookies.set("token_company", sessionToken, { expires: 60 });
        Cookies.set("id_company", objectId, { expires: 60 });
        dispatch({
          type: REGISTER_COMPANY,
          payload: {
            isLogged_company: true,
            token_company: sessionToken,
            id_company: objectId,
            isCompany: true,
            isLoading_company: false,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const RegisterCompany = async (payload) => {
    const { sessionToken, objectId } = payload;
    try {
      if (sessionToken) {
        console.log("Got token");
        Cookies.set("token_company", sessionToken, { expires: 60 });
        Cookies.set("id_company", objectId, { expires: 60 });
        dispatch({
          type: REGISTER_COMPANY,
          payload: {
            isLogged_company: true,
            token_company: sessionToken,
            id_company: objectId,
            isCompany: true,
            isLoading_company: false,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <appContext.Provider
      value={{
        isLogeed: state.isLogeed,
        LoginCompany,
        LogoutCompany,
        RegisterCompany,
        isLogged_company: state.isLogged_company,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppWrapper;
