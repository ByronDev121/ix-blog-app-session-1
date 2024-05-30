const createBlog = async (blog) => {
  const response = await fetch("http://localhost:8000/api/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });

  if (!response.ok) {
    let res = await response.json();
    throw res.message || res;
  }

  const blogsApiData = await response.json();
  return blogsApiData;
};

const getBlogs = async () => {
  try {
    const data = await fetch("http://localhost:8000/api/blogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const blogsApiData = await data.json();
    return blogsApiData.data;
  } catch (error) {
    return error;
  }
};

const getBlogByID = async (id) => {
  try {
    const data = await fetch("http://localhost:8000/api/blogs/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const blogsApiData = await data.json();
    return blogsApiData.data;
  } catch (error) {
    // return error;
  }
};

const getBlogsByCategoryId = async (categoryId) => {
  try {
    const data = await fetch(
      "http://localhost:8000/api/blogs/categories/" + categoryId,
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
    // return error;
  }
};

const updateBlog = async (id) => {
  try {
    const data = await fetch("http://localhost:8000/api/blogs/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const blogsApiData = await data.json();
    return blogsApiData.data;
  } catch (error) {
    // return error;
  }
};

const deleteBlog = async (id) => {
  try {
    const data = await fetch("http://localhost:8000/api/blogs/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const blogsApiData = await data.json();
    return blogsApiData.data;
  } catch (error) {
    // return error;
  }
};

const blogService = {
  getBlogs,
  getBlogsByCategoryId,
  createBlog,
  getBlogByID,
  updateBlog,
  deleteBlog,
};

export default blogService;
