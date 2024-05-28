const createBlogs = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    message: "Blog created!",
    data: [],
  });
};

const getBlogs = (req, res) => {
  res.status(200).json({
    message: "Get all blogs!",
    data: [],
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
