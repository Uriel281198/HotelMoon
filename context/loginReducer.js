import {
  LOGIN_COMPANY,
  LOGOUT_COMPANY,
  REGISTER_COMPANY,
} from "./loginContext";

const loginReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_COMPANY:
      return {
        ...state,
        isLogged_company: action.payload.isLogged_company,
        token_company: action.payload.token_company,
        id_company: action.payload.id_company,
        isCompany: action.payload.isCompany,
        isLoading_company: action.payload.isLogged_company,
      };

    case LOGOUT_COMPANY:
      return {
        ...state,
        isLogged_company: action.payload.isLogged_company,
        token_company: action.payload.token_company,
        id_company: action.payload.id_company,
        isCompany: action.payload.isCompany,
        isLoading_company: action.payload.isLogged_company,
      };

    case REGISTER_COMPANY: {
      return {
        ...state,
        isLogged_company: action.payload.isLogged_company,
        token_company: action.payload.token_company,
        id_company: action.payload.id_company,
        isCompany: action.payload.isCompany,
        isLoading_company: action.payload.isLogged_company,
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
