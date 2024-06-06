import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import SubHeading from "../../components/Subheading";
import BlogGrid from "../../components/BlogGrid";
import CategoriesList from "../../components/CategoriesList";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";

import {
  fetchBlogs,
  resetSuccessAndError as resetBlogSuccessAndError,
} from "../../features/blogsSlice";
import {
  fetchCategories,
  resetSuccessAndError as resetCategoriesSuccessAndError,
} from "../../features/categoriesSlice";

export default function Home() {
  const dispatch = useDispatch();

  const {
    blogs,
    isError: isBlogsError,
    isSuccess: isBlogsSuccess,
    isLoading: isLoadingBlogs,
    message: blogsMessage,
  } = useSelector((state) => state.blogs);

  const {
    categories,
    isError: isCategoriesError,
    isSuccess: isCategoriesSuccess,
    isLoading: isLoadingCategories,
    message: categoriesMessage,
  } = useSelector((state) => {
    return state.categories;
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchBlogs());
        dispatch(fetchCategories());
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  if (isLoadingBlogs || isLoadingCategories) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <Heading />
      <div className="container">
        <SubHeading subHeading={"Recent blog posts"} />
        <BlogGrid blogPosts={blogs} />
        <CategoriesList categories={categories} />
        <Footer />
      </div>
      <SuccessToast
        show={isBlogsSuccess || isCategoriesSuccess}
        message={blogsMessage || categoriesMessage}
        onClose={() => {
          dispatch(resetBlogSuccessAndError());
          dispatch(resetCategoriesSuccessAndError());
        }}
      />
      <ErrorToast
        show={isBlogsError || isCategoriesError}
        message={blogsMessage || categoriesMessage}
        onClose={() => {
          dispatch(resetBlogSuccessAndError());
          dispatch(resetCategoriesSuccessAndError());
        }}
      />
    </>
  );
}
