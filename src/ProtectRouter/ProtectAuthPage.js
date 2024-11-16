import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function ProtectAuthPage({ children }) {
  let { isAuthenticated } = useAuth();
  return <div>{isAuthenticated ? <Navigate to="/" /> : children}</div>;
}

export default ProtectAuthPage;
