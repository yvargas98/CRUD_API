const express = require("express");
const router = express.Router();

const { 
    createUser,
    getUsers,
    updateUserById,
    deleteUserById
} = require("../controllers/users.controllers");

router.post("/", createUser);
router.get("/", getUsers);
router.put("/:userId", updateUserById);
router.delete("/:userId", deleteUserById);
module.exports = router;