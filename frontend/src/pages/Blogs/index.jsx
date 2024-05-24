import React from "react";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";

import "./index.css";

const data = require("../../dummy-data.json");
const blogs = data.blogPosts;
const categories = data.categories;

export default function BlogsPage() {
  const CategoriesList = () => {
    return categories.map((category, index) => {
      return (
        // categoryId === category.id.toString() ? (
        //   <button
        //     key={category.id}
        //     onClick={() => setCategoryId(category.id)}
        //     style={{ color: "blue" }}
        //   >
        //     <p key={category.id}>{category.title}</p>
        //   </button>
        // ) : (
        <button
          key={category.id}
          // onClick={() => setCategoryId(category.id)}
          style={{ color: "black" }}
        >
          <p key={category.id}>{category.title}</p>
        </button>
      );
    });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoriesList />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Blog Posts</p>
        </div>
        <BlogList blogPosts={blogs} />
      </div>
      <Footer />
    </>
  );
}
