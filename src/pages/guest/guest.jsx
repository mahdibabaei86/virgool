import React from "react";
import ActionsTabPost from "../../components/ActionsTabPost";
import BtnNewPost from "../../components/BtnNewPost";
import { useAuth } from "../../hooks/useAuth";
import FamousUser from "./famousUser/famousUser";
import "./guest.css";
import Header_bottom from "./header_top/header_bottom/Header_bottom";
import Header_top from "./header_top/Header_top";
import SideBar from "./sideBar/SideBar";
import CardPost from "./CardPost/CardPost";
import ChosenPost from "./Chosen_post/ChosenPost";
import { useInfiniteQuery } from "@tanstack/react-query";

import InfiniteScroll from "react-infinite-scroll-component";

function Guest() {
  let { isAuthenticated, userInfo } = useAuth();
  let { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: async function ({ pageParam = 1 }) {
      if (userInfo) {
        let DataFetch = await fetch(
          `${process.env.REACT_APP_URL_BACKEND}api/public/posts/all?page=${pageParam}&userID=${userInfo?.id}`
        );
        return DataFetch.json();
      }
      let DataFetch = await fetch(
        `${process.env.REACT_APP_URL_BACKEND}api/public/posts/all?page=${pageParam}`
      );
      return DataFetch.json();
    },
    getNextPageParam: function (lastPage, pages) {
      return Number(lastPage.page) === lastPage.totalPages
        ? undefined
        : pages.length + 1;
    },
  });

  return (
    <div className="container_page_home">
      <Header_top />
      {!isAuthenticated && <Header_bottom />}

      <div className="body_posts">
        <SideBar />
        <div className="post_list_Data">
          {isAuthenticated && <ActionsTabPost />}

          <InfiniteScroll
            dataLength={data?.pages || 1}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>پستی دیگر وجود ندارد</b>
              </p>
            }
          >
            {data?.pages?.map((page, index) => (
              <React.Fragment key={index + 1}>
                {page?.result?.map((post) => (
                  <CardPost {...post} key={post?.post_id} />
                ))}
                <ChosenPost posts={data?.pages[0]?.result} />
              </React.Fragment>
            ))}
          </InfiniteScroll>
          <FamousUser />
        </div>
      </div>
      {isAuthenticated && <BtnNewPost />}
    </div>
  );
}

export default Guest;
