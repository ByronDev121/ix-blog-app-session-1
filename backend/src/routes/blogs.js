const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blogs");

const { protect } = require("../middleware/authMiddleware");

const logMiddleware = (req, res, next) => {
  console.log("I am a middleware");
  console.log(req.bogy);
  next();
};

/**
 * POST /api/blogs
 */
router.post("/", logMiddleware, protect, (req, res) => {
  blogController.createBlogs(req, res);
});

/**
 * GET /api/blogs
 */
router.get("/", (req, res) => {
  blogController.getBlogs(req, res);
});

/**
 * Get blogs by blogID
 * GET /api/blogs/:id
 */
router.get("/:id", (req, res) => {
  blogController.getBlogById(req, res);
});

/**
 * Get blogs by categoryID
 * GET /api/blogs/categories/:id
 */
router.get("/categories/:id", (req, res) => {
  blogController.getBlogsByCategoryID(req, res);
});

/**
 * Get blogs by authorId
 * GET /api/blogs/author/:id
 */
router.get("/author/:id", (req, res) => {
  blogController.getBlogsByAuthorID(req, res);
});

/**
 * Put /api/blogs/
 */
router.put("/:id", protect, (req, res) => {
  blogController.updateBlogByID(req, res);
});

/**
 * DELETE /api/blogs/
 */
router.delete("/:id", protect, (req, res) => {
  blogController.deleteBlogByID(req, res);
});

module.exports = router;
