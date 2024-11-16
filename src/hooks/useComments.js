import { useState } from "react";

function useComments(postID) {
  let [comments, setComments] = useState(null);

  function getComments() {
    fetch(
      `${process.env.REACT_APP_URL_BACKEND}api/public/posts/comments/${postID}/`
    )
      .then((res) => res.json())
      .then((result) => {
        setComments(result.result);
      });
  }

  return { comments, getComments };
}

export { useComments };
