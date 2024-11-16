import { useQuery, useQueryClient } from "@tanstack/react-query";
import { descriptionPreview } from "../../../method/descriptionPreview";
import { FaBookmark } from "react-icons/fa6";
import { toast } from "react-toastify";

import "./Bookmarks.css";
import { useNavigate } from "react-router-dom";

function Bookmarks() {
  let navigate = useNavigate();
  let QueryClinet = useQueryClient();
  let { data } = useQuery({
    queryKey: ["bookmarks"],
    queryFn: async function () {
      let Datafetch = await fetch(
        `${process.env.REACT_APP_URL_BACKEND}api/posts/bookmarks/`,
        {
          credentials: "include",
        }
      );
      return Datafetch.json();
    },
  });

  function handelDeleteBookmark(BookmarkID) {
    let confirmDeleteBookmark = window.confirm(
      "آیا از حذف بوک مارک مطمئن هستی؟"
    );
    if (confirmDeleteBookmark) {
      fetch(
        `${process.env.REACT_APP_URL_BACKEND}api/posts/delete-bookmark/${BookmarkID}`,
        {
          credentials: "include",
        }
      )
        .then((res) => res.json())
        .then((result) => {
          if (result.status == 201) {
            QueryClinet.invalidateQueries({ queryKey: ["bookmarks"] });
            toast.success("بوک مارک با موفقیت حذف شد");
          }
        })
        .catch(() => toast.error("خطا در حذف بوک مارک"));
    }
  }

  return (
    <div className="container_bookmarks">
      <h1>بوک مارک ها</h1>
      <div className="list_bookmarks">
        {data?.result.length > 0 ? (
          data?.result?.map((bookmark, index) => (
            <div className="card_post_bookmark" key={index}>
              <img src={bookmark.cover_url} />
              <p>{descriptionPreview(bookmark.content)}</p>
              <h3 onClick={() => navigate(`/article?post-id=${bookmark.id}`)}>
                {bookmark.title}
              </h3>
              <button
                className="btn_delete_card_bookmark"
                onClick={() => handelDeleteBookmark(bookmark.id)}
              >
                حذف بوک مارک
              </button>
            </div>
          ))
        ) : (
          <div className="not_data_bookmark">
            <span>
              پست‌هایی که میخواهید بعدا مطالعه کنید را به این بخش اضافه کنید. با
              کلیک بر روی <FaBookmark /> در هر پست می‌توانید آن را به این قسمت
              اضافه کنید.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Bookmarks;
