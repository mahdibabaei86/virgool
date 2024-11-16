import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const { createContext, useState, useEffect } = require("react");

const AuthContext = createContext();
function AuthContextProvider({ children }) {
  let navigate = useNavigate();
  let [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem("userID"))
  );
  let [userID, setUserID] = useState(localStorage.getItem("userID"));
  let [userInfo, setUserInfo] = useState(null);

  function login(ID) {
    setIsAuthenticated(true);
    setUserID(ID);
    localStorage.setItem("userID", ID);
    fetchUserData();
  }

  function logout() {
    setIsAuthenticated(false);
    localStorage.removeItem("userID");
    setUserID(null);
    setUserInfo(null);
    navigate("/");
  }

  function fetchUserData() {
    fetch(`${process.env.REACT_APP_URL_BACKEND}api/user/view/${userID}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status == 200) {
          setUserInfo(result.result);
        }

        if (result.status == 401) {
          toast.error("توکن شما منقضی شده");
          logout();
        }
      });
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchUserData();
    }
  }, [userID, isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, userID, userInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };

export default AuthContextProvider;
