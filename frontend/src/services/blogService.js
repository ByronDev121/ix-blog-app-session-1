const getBlogs = async () => {
  try {
    const data = await fetch(
      "https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const blogsApiData = await data.json();
    return blogsApiData.data;
  } catch (error) {
    throw new Error(error);
  }
};

const blogService = {
  getBlogs,
};

export default blogService;
