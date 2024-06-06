const express = require("express");
const router = express.Router();

const { login, register, getUser, updateUser } = require("../controllers/auth");

router.post("/login", (req, res) => {
  login(req, res);
});

router.post("/register", (req, res) => {
  register(req, res);
});

router.get("/user/:id", (req, res) => {
  getUser(req, res);
});

router.put("/user/:id", (req, res) => {
  updateUser(req, res);
});

module.exports = router;
