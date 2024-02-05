import { createContext, useContext, useReducer } from "react";

const userContext = createContext();
const initialState = {
  user: null,
  isAuth: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    case "logout":
      return initialState;
    default:
      throw new Error("Something is wrong during the Authenication :(");
  }
};
const userProvider = ({ children }) => {
  const [{ user, isAuth }, dispatch] = useReducer(reducer, initialState);
  const login = (email,password)=> {

  };
  const logout = ()=> {
    
  }
  return <userContext.Provider>{children}</userContext.Provider>;
};
const useUserContext = () => {
  const context = useContext(userContext);
  if (context === undefined)
    throw new Error("Context was used outside the Context Provider");
  return context;
};

export { useUserContext };
