import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

function useAuth() {
  let { isAuthenticated, login, userID, logout, userInfo } =
    useContext(AuthContext);
  return { isAuthenticated, login, userID, logout, userInfo };
}

export { useAuth };
