import React, { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { TbArticleFilled } from "react-icons/tb";
import UserList from "../../../components/UserList";
import ChartComponent from "../ChartComponent";

import "./Home.css";

function Home() {
  let { userInfo } = useAuth();
  let [content, setContent] = useState(null);
  useEffect(() => {
    if (userInfo) {
      fetch(
        `${process.env.REACT_APP_URL_BACKEND}api/public/user/view/${userInfo?.username}`
      )
        .then((res) => res.json())
        .then((result) => {
          setContent(result.result);
        });
    }
  }, [userInfo]);

  return (
    <div className="container_home">
      <div>
        <h2 className="h1_welcome">خوش آمدید، {content?.fullname}!</h2>
        <h2 className="description_welcome">
          از اینجا می‌توانید مطالب خود را مدیریت کنید و به فعالیت‌های اخیر خود
          دسترسی داشته باشید. لحظه‌های خوبی داشته باشید!
        </h2>
      </div>

      <div className="container_box_stats_overview">
        <div className="box_stats">
          <div className="icon_box_count_posts">
            <TbArticleFilled />
          </div>
          <span className="title_box_stats">تعداد دنبال کنندگان</span>
          <span className="count_box_stats">{content?.follower_count}</span>
        </div>
        <div className="box_stats">
          <div className="icon_box_count_posts">
            <TbArticleFilled />
          </div>
          <span className="title_box_stats">تعداد دنبال شوندگان</span>
          <span className="count_box_stats">{content?.following_count}</span>
        </div>
        <div className="box_stats">
          <div className="icon_box_count_posts">
            <TbArticleFilled />
          </div>
          <span className="title_box_stats">تعداد کل پست ها</span>
          <span className="count_box_stats">{content?.posts.length}</span>
        </div>
      </div>
      <div>
        <ChartComponent />
      </div>
      <div className="container_users">
        <div className="container_list_users_follower">
          <span>دنبال کنندگان</span>
          <div className="list_users_follower">
            <UserList />
          </div>
        </div>

        <div className="container_list_users_follower">
          <span>دنبال شوندگان</span>
          <div className="list_users_follower">
            <UserList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
