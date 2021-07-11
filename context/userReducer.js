import {LOGIN_USER, LOGOUT_USER, REFETCH_USER, REGISTER_USER} from "./userContext";

const userReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        isUser: action.payload.isUser,
        token_user: action.payload.token_user,
        id_user: action.payload.id_user,
        isLogged_User: action.payload.isLogged_User,
        isLoading: action.payload.isLoading,
        userData: action.payload.userData,
        id_candidate: action.payload.id_candidate,
      };
    case LOGIN_USER:
      return {
        ...state,
        isUser: action.payload.isUser,
        token_user: action.payload.token_user,
        id_user: action.payload.id_user,
        isLogged_User: action.payload.isLogged_User,
        isLoading: action.payload.isLoading,
        userData: action.payload.userData,
        id_candidate: action.payload.id_candidate,
      };

    case LOGOUT_USER:
      return {
        ...state,
        isUser: action.payload.isUser,
        token_user: action.payload.token_user,
        id_user: action.payload.id_user,
        isLogged_User: action.payload.isLogged_User,
        isLoading: action.payload.isLoading,
        userData: action.payload.userData,
        id_candidate: action.payload.id_candidate,
      };

    case REFETCH_USER:
      return {
        ...state,
        userData: action.payload.userData,
      };
    default:
      return state;
  }
};

export default userReducer;
