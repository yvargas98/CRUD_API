const express = require("express");
const router = express.Router();

const {
    createPost, getPosts, updatePostById, deletePostById
} = require("../controllers/posts.controllers");
const { verifyToken } = require("../middlewares/authToken");
const { isAdminOrEditor } = require("../middlewares/verifyRoles");
const { duplicatePost } = require("../middlewares/validates");

router.post("/", [verifyToken, isAdminOrEditor, duplicatePost], createPost);
router.get("/", verifyToken, getPosts);
router.put("/:postId", [verifyToken, isAdminOrEditor], updatePostById);
router.delete("/:postId", [verifyToken, isAdminOrEditor], deletePostById);

module.exports = router;