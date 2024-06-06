import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import BlogItem from "../BlogItem";

import "./index.css";

// State
import { setEditBlog, setDeleteBlog } from "../../features/blogsSlice";

export default function BlogList({ blogPosts }) {
  const dispatch = useDispatch();

  if (!blogPosts && !blogPosts?.length) {
    return null;
  }

  const onBlogEdit = (blog) => {
    dispatch(setEditBlog(blog));
  };

  const onBlogDelete = (blog) => {
    dispatch(setDeleteBlog(blog));
  };

  // TODO: Styling
  return (
    <div className="blog-list">
      {blogPosts.map((blog, index) => {
        return (
          <BlogItem
            key={index}
            index={index}
            blog={blog}
            imageOrientation={"top"}
            onBlogEdit={() => onBlogEdit(blog)}
            onBlogDelete={() => onBlogDelete(blog)}
          />
        );
      })}
    </div>
  );
}

BlogList.prototype = {
  blogPosts: PropTypes.array.isRequired,
};
