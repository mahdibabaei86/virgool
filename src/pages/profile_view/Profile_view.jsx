import "./Profile_view.css";
import HeaderTop from "../guest/header_top/Header_top";
import CardPost from "../guest/CardPost/CardPost";
import { MdBlock } from "react-icons/md";
import { useAuth } from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BtnFollow from "../components/BtnFollow";

function Profile_view() {
  let location = useLocation();
  let { userInfo } = useAuth();
  let navigate = useNavigate();
  let [dataPage, setDataPage] = useState(null);
  let username = new URLSearchParams(location.search).get("u");

  function handelToggleFollow(followedID) {
    fetch(`${process.env.REACT_APP_URL_BACKEND}api/user/follow/${followedID}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status == 201) {
          setDataPage((prev) => ({ ...prev, isFollow: !prev.isFollow }));
        }
      });
  }

  useEffect(() => {
    if (userInfo) {
      fetch(
        `${process.env.REACT_APP_URL_BACKEND}api/public/user/view/${username}?userFollower=${userInfo?.id}&userFollowd=${username}`
      )
        .then((res) => res.json())
        .then((result) => {
          setDataPage(result.result);
        });
    } else {
      fetch(
        `${process.env.REACT_APP_URL_BACKEND}api/public/user/view/${username}`
      )
        .then((res) => res.json())
        .then((result) => {
          setDataPage(result.result);
        });
    }
  }, [userInfo]);

  return (
    <>
      <HeaderTop />
      <div className="container_info_User">
        <img src={dataPage?.profile_url} />
        <h1 className="name_user_view_profile">{dataPage?.fullname}</h1>
        <span className="bio_user_view_profile">{dataPage?.bio}</span>
        <div className="info_follows">
          <div className="followers">
            <span>
              توسط{" "}
              <span className="number_follow">{dataPage?.follower_count}</span>{" "}
              نفر دنبال میشود
            </span>
          </div>
          <span className="following">
            <span className="number_follow num_following">
              {dataPage?.following_count}
            </span>
            <span>نفر را دنبال میکند</span>
          </span>
        </div>
        {userInfo?.username == username ? (
          <span
            className="btn_profile_view_settings"
            onClick={() => navigate("/writer/settings/account")}
          >
            تنظیمات حساب کاربری
          </span>
        ) : (
          <div className="btns_action_profile_views">
            <BtnFollow
              user_id={dataPage?.user_id}
              isFollow={dataPage?.isFollow}
              handelToggleFollow={handelToggleFollow}
            />
            <button className="btn_block_user">
              <MdBlock />
              <span>بلاک کردن</span>
            </button>
          </div>
        )}
      </div>
      <div className="list_post_user_profile">
        {dataPage?.posts ? (
          dataPage?.posts.map((post) => {
            return (
              <CardPost
                {...post}
                name_writer={dataPage?.fullname}
                profile_writer={dataPage?.profile_url}
              />
            );
          })
        ) : (
          <div className="container_no_post">
            <span>
              هنوز پستی در ویرگول ننوشته. بعد از انتشار اولین پست، آن را در
              اینجا نمایش می‌دهیم
            </span>
            <span className="span_username">{dataPage?.username}</span>
          </div>
        )}
      </div>
    </>
  );
}

export default Profile_view;
