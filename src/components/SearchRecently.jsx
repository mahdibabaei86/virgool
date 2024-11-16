import { IoSearchOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";

import "./SearchRecently.css";
import { useNavigate } from "react-router-dom";

function SearchRecently({ recentlySearch }) {
  let navigate = useNavigate();
  return (
    <div className="box_search_recently">
      <span>جستجو های اخیر</span>
      <div className="list_recently_search">
        {recentlySearch
          ?.slice(-5)
          .reverse()
          .map(
            (search, index) =>
              index + 1 <= 5 && (
                <div
                  className="li_search_recently"
                  onClick={() => navigate(`/search/posts?s=${search.title}`)}
                >
                  <MdClose className="icon_close_recently" />
                  <span>{search.title}</span>
                  <IoSearchOutline className="icon_search_recently" />
                </div>
              )
          )}
      </div>
    </div>
  );
}

export default SearchRecently;
