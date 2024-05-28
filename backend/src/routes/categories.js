const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.send("Hello from categories!");
});

router.get("/", (req, res) => {
  res.send("Hello from categories!");
});

router.put("/", (req, res) => {
  res.send("Hello from categories!");
});

router.delete("/", (req, res) => {
  res.send("Hello from categories!");
});
