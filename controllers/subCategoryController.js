const SubCategory = require('../models/SubCategory');
const Category = require('../models/Category');

// Create a sub-category
exports.createSubCategory = async (req, res) => {
  const { name, image, description, taxApplicability, tax, categoryId } = req.body;
  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    const subCategory = new SubCategory({ name, image, description, taxApplicability, tax, category: categoryId });
    await subCategory.save();
    res.status(201).json(subCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all sub-categories
exports.getSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find().populate('category');
    res.status(200).json(subCategories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get sub-category by ID
exports.getSubCategoryById = async (req, res) => {
  try {
    const subCategory = await SubCategory.findById(req.params.id).populate('category');
    if (!subCategory) {
      return res.status(404).json({ message: 'Sub-category not found' });
    }
    res.status(200).json(subCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a sub-category
exports.updateSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(subCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
