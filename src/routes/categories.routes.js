const express = require("express");
const router = express.Router();

const { 
    createCategory, getCategories, updateCategoryById, deleteCategoryById 
} = require("../controllers/categories.controller");
const { verifyToken } = require("../middlewares/authToken");
const { isAdminOrEditor } = require("../middlewares/verifyRoles");
const { duplicateCategory} = require("../middlewares/validates");

router.post("/", [verifyToken, isAdminOrEditor, duplicateCategory], createCategory);
router.get("/", verifyToken, getCategories);
router.put("/:categoryId", [verifyToken, isAdminOrEditor], updateCategoryById);
router.delete("/:categoryId", [verifyToken, isAdminOrEditor], deleteCategoryById);

module.exports = router;