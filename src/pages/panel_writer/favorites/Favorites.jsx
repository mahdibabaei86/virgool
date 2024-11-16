import { useEffect, useState } from "react";
import CardPost from "../../guest/CardPost/CardPost";
import "./Favorites.css";

function Favorites() {
  let [postsLike, setPostsLike] = useState(null);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_BACKEND}api/posts/favorites`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((result) => {
        setPostsLike(result.result);
      });
  }, []);

  return (
    <div className="container_post_favorites">
      <div className="header_favorite">
        <h1>پست های مورد علاقه</h1>
      </div>
      <div className="list_posts_favorites">
        {postsLike &&
          postsLike.map((post) => (
            <CardPost {...post} key={post.id} post_id={post.id} />
          ))}
      </div>
    </div>
  );
}

export default Favorites;
