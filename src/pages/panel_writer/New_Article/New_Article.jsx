import React, { useEffect, useRef, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useAuth } from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { Select } from "antd";

import "./New_Article.css";

const normalizePath = (path) => {
  let pathEdit = path.replace(/\\+/g, "/");
  const fileName = pathEdit.split("/uploads/")[1];
  const url = `${process.env.REACT_APP_URL_BACKEND}uploads/${fileName}`;
  return url;
};

function New_Article() {
  let location = useLocation();
  let navigate = useNavigate();
  let [categorySelected, setCategorySelected] = useState(null);
  const [content, setContent] = useState("");
  const [urlCover, setUrlCover] = useState(
    "https://wp.dev.hoa.com/_app/immutable/assets/cover_banner.78063fc6.jpeg"
  );
  let [categoryList, setCategoryList] = useState(null);
  let inputUploadCover = useRef(null);
  let tagImgRef = useRef(null);
  let inputTitleref = useRef(null);
  let [fileCover, setFileCover] = useState(null);
  let [contentEdit, setContentEdit] = useState(null);
  let [isChangeCover, setIsChangeCover] = useState(false);
  let { userInfo } = useAuth();

  let postIDParameter = new URLSearchParams(location.search).get("postID");

  useEffect(() => {
    if (postIDParameter) {
      if (userInfo) {
        fetch(
          `${process.env.REACT_APP_URL_BACKEND}api/public/posts/${postIDParameter}/`
        )
          .then((res) => res.json())
          .then((result) => {
            if (
              result.result.length !== 0 &&
              result.result[0].user_id == userInfo.id
            ) {
              setContentEdit(result.result[0]);
              setContent(result.result[0].content);
              setUrlCover(result.result[0].cover_url);
              setCategorySelected(result.result[0].category_id);
            } else {
              navigate("/writer/posts/");
            }
          })
          .catch(() => navigate("/writer/posts/"));
      }
    }
  }, [userInfo]);

  async function uploadCover(formDatas) {
    let fetchCover = await fetch(
      `${process.env.REACT_APP_URL_BACKEND}api/posts/upload-cover/`,
      {
        method: "POST",
        body: formDatas,
        credentials: "include",
      }
    );
    return fetchCover.json();
  }

  async function handelSelectCover(file) {
    let Reader = new FileReader();
    Reader.onload = function (event) {
      setUrlCover(event.target.result);
    };
    Reader.readAsDataURL(file);
    setFileCover(file);
    setIsChangeCover(true);
  }

  async function sendPost() {
    let formData = new FormData();
    formData.append("uploaded_cover_post", fileCover);
    let coverData = await uploadCover(formData);
    let post = {
      title: inputTitleref.current.value,
      content: content,
      category: categorySelected,
      cover: normalizePath(coverData.file.path),
    };

    fetch(`${process.env.REACT_APP_URL_BACKEND}api/posts/new-post/`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status == 201) {
          toast.success(result.message);
          navigate("/");
        } else {
          toast.error("ّError Internal Server");
        }
      });
  }

  async function updatePost() {
    let coverUrlPost = tagImgRef.current.src;
    if (isChangeCover) {
      let formData = new FormData();
      formData.append("uploaded_cover_post", fileCover);
      let coverData = await uploadCover(formData);
      coverUrlPost = normalizePath(coverData.file.path);
    }
    let postUpdate = {
      postID: contentEdit.post_id,
      title: inputTitleref.current.value,
      content: content,
      category: categorySelected,
      cover: coverUrlPost,
    };

    fetch(`${process.env.REACT_APP_URL_BACKEND}api/posts/edit-post/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postUpdate),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/writer/posts");
        toast.success(result.message);
      })
      .catch(() => toast.error("Failed Edit post"));
  }

  // function handelDraftedPost() {
  //   let draftedPosts = JSON.parse(localStorage.getItem("post_draft")) || [];
  //   let draftPost = {
  //     title: inputTitleref.current.value,
  //     content: content,
  //     category: categorySelected,
  //     cover: tagImgRef.current.src,
  //   };
  //   draftedPosts.push(draftPost);
  //   localStorage.setItem("post_draft", JSON.stringify(draftedPosts));
  // }

  function handelDeletePost() {
    let confirmDeletePost = window.confirm("آیا از حذف پست اطمینان دارید؟");
    if (confirmDeletePost) {
      fetch(`${process.env.REACT_APP_URL_BACKEND}api/posts/delete-post/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postID: postIDParameter }),
        credentials: "include",
      })
        .then((res) => res.json())
        .then((result) => {
          toast.success(result.message);
          navigate("/writer/posts/");
        })
        .catch(() => toast.error("Failed Delete Post"));
    }
  }

  // get category all
  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_BACKEND}api/public/categorys/all/`)
      .then((res) => res.json())
      .then((result) => {
        let formatCategorys = result?.result?.map((cat) => {
          return {
            label: cat.name,
            value: cat.id,
          };
        });
        setCategoryList(formatCategorys);
      });
  }, []);

  return (
    <div className="container_page_new_post">
      <div className="header_page_new_post">
        <img
          src={urlCover}
          className="cover_editor"
          ref={tagImgRef}
          onClick={() => inputUploadCover.current.click()}
        />
        <div className="action_new_post">
          <span className="category_post">
            {categoryList && categoryList[categorySelected] ? (
              <span>
                دسته بندی فعلی : {categoryList[categorySelected].label}
              </span>
            ) : (
              "در حال بارگذاری..."
            )}
          </span>
          <span className="title_post_action">عنوان مقاله</span>
          <input
            type="text"
            className="title_input_post"
            placeholder="عنوان مقاله"
            ref={inputTitleref}
            defaultValue={contentEdit?.title}
          />
          <Select
            style={{
              width: "100%",
            }}
            onChange={(caetegoryID) => setCategorySelected(caetegoryID)}
            options={[
              {
                label: <span>دسته بندی ها</span>,
                title: "دسته بندی",
                options: categoryList || [],
              },
            ]}
          />
          <div className="container_btns_action_new_post">
            {postIDParameter ? (
              <button className="btn_send_article" onClick={updatePost}>
                آپدیت کردن
              </button>
            ) : (
              <button className="btn_send_article" onClick={sendPost}>
                منتشر کردن
              </button>
            )}

            {postIDParameter && (
              <button
                className="btn_delete_post_action"
                onClick={handelDeletePost}
              >
                حذف مقاله
              </button>
            )}
            <button
              className="btn_cancel_publish_post_action"
              onClick={() => navigate("/writer/posts/")}
            >
              منصرف شدن
            </button>
          </div>
        </div>
      </div>
      <input
        type="file"
        accept="image/*"
        ref={inputUploadCover}
        style={{ display: "none" }}
        name="uploaded_cover_post"
        onChange={(e) => handelSelectCover(e.target.files[0])}
      />
      <div className="container_editor">
        <CKEditor
          editor={ClassicEditor}
          data={content}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
          }}
          config={{
            ckfinder: {
              uploadUrl: "http://localhost:5000/api/public/posts/upload/",
              upload: async (file) => {
                const formData = new FormData();
                console.log(file);
                formData.append("upload", file);

                try {
                  const response = await fetch(
                    "http://localhost:5000/api/public/posts/upload/",
                    {
                      method: "POST",
                      body: formData,
                      headers: {
                        Accept: "application/json",
                      },
                      credentials: "include",
                    }
                  );

                  const result = await response.json();
                  console.log(result);
                  if (result.uploaded) {
                    return { default: result.url }; // بازگشت URL تصویر آپلود شده
                  } else {
                    throw new Error(result.error?.message || "Upload failed");
                  }
                } catch (error) {
                  throw error;
                }
              },
            },
            language: "fa", // تنظیم زبان به فارسی
            contentsLangDirection: "rtl", // تنظیم جهت محتوا به راست‌به‌چپ
            image: {
              toolbar: [
                "imageTextAlternative",
                "imageStyle:full",
                "imageStyle:side",
              ],
              upload: {
                types: ["jpeg", "jpg", "png"],
                maxSize: 5242880,
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default New_Article;
