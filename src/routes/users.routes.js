const express = require("express");
const router = express.Router();

const { 
    createUser,
    getUsers,
    updateUserById,
    deleteUserById
} = require("../controllers/users.controllers");
const { verifyToken } = require("../middlewares/authToken");
const { isAdmin } = require("../middlewares/verifyRoles");
const { duplicateUser } = require("../middlewares/validates");

router.post("/", [verifyToken, isAdmin, duplicateUser], createUser);
router.get("/", [verifyToken, isAdmin], getUsers);
router.put("/:userId", [verifyToken, isAdmin], updateUserById);
router.delete("/:userId", [verifyToken, isAdmin], deleteUserById);
module.exports = router;