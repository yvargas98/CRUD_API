const express = require("express");
const router = express.Router();

const auth = require("./auth.routes");
const categories = require("./categories.routes");
const users = require("./users.routes");
const posts = require("./posts.routes");

router.get("/", (req, res) => {
    res.send("Welcome!");
});

router.use('/authentication', auth);
router.use("/categories",categories);
router.use("/users",users);
router.use("/posts",posts);

module.exports = router;