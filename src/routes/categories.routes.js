const express = require("express");
const router = express.Router();

const { 
    createCategory, 
    getCategories, 
    updateCategoryById, deleteCategoryById 
} = require("../controllers/categories.controller");

router.post("/", createCategory);
router.get("/", getCategories);
router.put("/:categoryId", updateCategoryById);
router.delete("/:categoryId", deleteCategoryById);

module.exports = router;