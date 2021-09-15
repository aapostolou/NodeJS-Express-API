const express = require("express");
const router = express.Router();

const { content } = require("./content");
let data = JSON.parse(JSON.stringify(content));

// GET
router.get("/", (req, res) => {
  return res.status(200).json(data);
});
router.get("/help", (req, res) => {
  return res.status(200).json({
    "/menu": "Return all menu items",
    "/menu/item/:id": "Return item by id",
    "/contact-info": "Return contact info",
    "/reset": "Reset data to initial",
    "/help": "Show all this !"
  });
});

router.get("/menu", (req, res) => {
  return res.status(200).json(data.menu);
});

router.get("/menu/item/:id", (req, res) => {
  const { id } = req.params;

  return res.status(200).json(data.menu.find((item) => item.id == id) ?? {});
});

router.get("/contact-info", (req, res) => {
  return res.status(200).json(data["contact-info"]);
});

// POST

// RESET
router.get("/reset", (req, res) => {
  data = JSON.parse(JSON.stringify(content));

  return res.status(200).json({ result: "success" });
});

module.exports = router;
