const Blog = require("../models/Blog");

const createBlogs = async (req, res) => {
  console.log(req.body);

  const blog = new Blog({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    content: req.body.content,
    authorId: req.body.authorId,
    categoryIds: req.body.categoryIds,
  });

  await blog.save();

  res.status(200).json({
    message: "Blog created!",
    data: blog,
  });
};

const getBlogs = async (req, res) => {
  const blogs = await Blog.find();

  res.status(200).json({
    message: "Get all blogs!",
    data: blogs,
  });
};

const getBlogById = (req, res) => {
  console.log(req.params.id);
  res.status(200).json({
    message: "Get blog by ID!",
    data: [],
  });
};

const getBlogsByCategoryID = (req, res) => {
  console.log(req.params.id);
  res.status(200).json({
    message: "Get blogs by categoryID!",
    data: [],
  });
};

const updateBlogByID = (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  res.status(200).json({
    message: "Blog updated!",
    data: [],
  });
};

const deleteBlogByID = (req, res) => {
  console.log(req.params.id);
  res.status(200).json({
    message: "Blog deleted!",
    data: [],
  });
};

module.exports = {
  createBlogs,
  getBlogs,
  getBlogById,
  getBlogsByCategoryID,
  updateBlogByID,
  deleteBlogByID,
};
