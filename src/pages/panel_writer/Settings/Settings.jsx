import { Outlet } from "react-router-dom";
import "./Settings.css";

function Settings() {
  return (
    <div className="container_settings">
      <h1 className="title_page_settings">تنظیمات</h1>
      <Outlet />
    </div>
  );
}

export default Settings;
