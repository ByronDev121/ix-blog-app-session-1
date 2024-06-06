import React, { useMemo, useEffect, useState } from "react";
import { Modal } from "bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteBlogById,
  setDeleteBlog,
} from "../../features/blogsSlice";

export default function DeleteBlogModal() {
  const dispatch = useDispatch();
  const [blog, setBlog] = useState();

  const { deleteBlog } = useSelector((state) => state.blogs);

  const modalEl = document.getElementById("deleteBlogModal");
  const deleteBlogModal = useMemo(() => {
    return modalEl ? new Modal(modalEl) : null;
  }, [modalEl]);

  useEffect(() => {
    if (deleteBlog) {
      setBlog(deleteBlog);
      deleteBlogModal?.show();
    }
  }, [deleteBlog, deleteBlogModal]);

  const resetBlog = () => {
    setBlog({
      image: "",
      title: "",
      description: "",
      categories: [],
      content: [],
      authorId: "",
    });
  };

  const onCloseModal = () => {
    resetBlog();
    dispatch(setDeleteBlog(null));
    deleteBlogModal?.hide();
  };

  const onDelete = () => {
    dispatch(deleteBlogById(blog?.id));
    resetBlog();
    deleteBlogModal?.hide();
  };

  return (
    <div
      className="modal fade"
      id="deleteBlogModal"
      aria-labelledby="deleteBlogModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="deleteBlogModalLabel">
              Delete Blog
            </h1>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onCloseModal}
            ></button>
          </div>
          <div className="modal-body">
            <p>Are You sure you want to delete this Blog Post?</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={blog?.image}
                alt={blog?.title}
                style={{ width: "50px" }}
              />
              <h5 style={{ marginLeft: "8px" }}>{blog?.title}</h5>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCloseModal}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
