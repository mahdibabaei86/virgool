import { Outlet } from "react-router-dom";
import Header_top from "../../guest/header_top/Header_top";
import SidePanel from "../components/SidePanel";
import ProtectWriterPanel from "../../../ProtectRouter/ProtectWriterPanel";
import "./Main.css";
import { useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { toast } from "react-toastify";

function Main() {
  let { userInfo, logout } = useAuth();

  useEffect(() => {
    let intervalAuth;
    if (userInfo) {
      const checkTokenExpiration = () => {
        let currentTime = Math.floor(Date.now() / 1000);
        if (userInfo.expToken < currentTime) {
          logout();
          toast.error("توکن منقضی شده");
        }
      };

      checkTokenExpiration();

      intervalAuth = setInterval(checkTokenExpiration, 10000);
    }
    return () => {
      if (intervalAuth) {
        clearInterval(intervalAuth);
      }
    };
  }, [userInfo]);

  return (
    <>
      <ProtectWriterPanel>
        <Header_top />
        <div className="container_content_panel_writer">
          <div className="content_panel_writer">
            <Outlet />
          </div>
          <SidePanel />
        </div>
      </ProtectWriterPanel>
    </>
  );
}

export default Main;
