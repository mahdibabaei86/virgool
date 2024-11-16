import "./App.css";
import Article from "./pages/article/Article";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Guest from "./pages/guest/guest";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Search from "./pages/search/Search";
import Profile_view from "./pages/profile_view/Profile_view";
import Interests from "./pages/interests/Interests";
import Main from "./pages/panel_writer/Main/Main";
import Home from "./pages/panel_writer/Home/Home";
import Settings from "./pages/panel_writer/Settings/Settings";
import Account from "./pages/panel_writer/Settings/Account";
import Posts from "./pages/panel_writer/Posts/Posts";
import New_Article from "./pages/panel_writer/New_Article/New_Article";
import Favorites from "./pages/panel_writer/favorites/Favorites";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Bookmarks from "./pages/panel_writer/Bookmarks/Bookmarks";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Guest />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/article" element={<Article />} />
            <Route path="/search/:filter/" element={<Search />} />
            <Route path="/profile-user/" element={<Profile_view />} />
            <Route path="/interests/" element={<Interests />} />

            {/* مسیر والد برای پنل نویسنده */}
            <Route path="/writer" element={<Main />}>
              {/* ریدایرکت از /writer به /writer/home */}
              <Route index element={<Navigate to="/writer/home" replace />} />
              <Route path="posts" element={<Posts />} />
              <Route path="new-post" element={<New_Article />} />
              <Route path="home" element={<Home />} />
              <Route path="bookmarks" element={<Bookmarks />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="settings" element={<Settings />}>
                <Route path="account" element={<Account />} />
              </Route>
            </Route>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
