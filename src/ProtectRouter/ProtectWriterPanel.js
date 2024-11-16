import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

function ProtectWriterPanel({ children }) {
  let location = useLocation();
  let navigate = useNavigate();
  let { userInfo, isAuthenticated } = useAuth();
  useEffect(() => {
    console.log(location.pathname);
    if (isAuthenticated) {
      if (userInfo) {
        if (userInfo?.role === "writer") {
          navigate(location.pathname);
        } else {
          navigate("/admin/");
        }
      }
    } else {
      navigate("/", { replace: true });
    }
  }, []);
  return isAuthenticated ? children : null;
}

export default ProtectWriterPanel;
