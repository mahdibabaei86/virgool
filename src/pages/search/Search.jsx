import { NavLink, useParams, useLocation } from "react-router-dom";
import Header_top from "../../pages/guest/header_top/Header_top";
import CardPost from "../guest/CardPost/CardPost";
import { FaUserAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

import "./Search.css";
import UserList from "../../components/UserList";
import { useEffect, useState } from "react";

function Search() {
  let [dataPage, setDataPage] = useState([]);
  let location = useLocation();
  let params = useParams();
  let searchParameter = new URLSearchParams(location.search).get("s");

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_URL_BACKEND}api/public/search/posts?search=${searchParameter}`
    )
      .then((res) => res.json())
      .then((result) => {
        setDataPage(result.result);
      });
  }, [searchParameter]);

  return (
    <>
      <Header_top />
      <div className="container_result_search">
        <div className="side_panel">
          <h3 className="title_filter">فیلتر بر اساس</h3>
          <nav>
            <NavLink to="/search/posts/">پست ها</NavLink>
            <NavLink to="/search/users/">کاربران</NavLink>
          </nav>
          <div className="author_bested">
            <div className="header_author_bested">
              <h2>نویسندگان برتر</h2>
              <FaUserAlt />
            </div>
            <div className="container_user_list">
              <UserList />
            </div>
          </div>
        </div>
        <div className="main_panel">
          <h1 className="title_search">
            <span className="title_static">نتایج جستجو برای /</span>
            <span className="title_dynamic">{searchParameter}</span>
          </h1>
          <div className="list_search_result">
            {params.filter === "posts" ? (
              <>
                {dataPage ? (
                  dataPage.map((post) => {
                    return (
                      <CardPost
                        {...post}
                        name_writer={post.username}
                        profile_writer={post.profile_url}
                      />
                    );
                  })
                ) : (
                  <h1>Not Data</h1>
                )}
              </>
            ) : (
              <UserList />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
