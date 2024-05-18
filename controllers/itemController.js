const Item = require('../models/Item');
const SubCategory = require('../models/SubCategory');

// Create an item
exports.createItem = async (req, res) => {
  const { name, image, description, taxApplicability, tax, baseAmount, discount, totalAmount, subCategoryId } = req.body;
  try {
    const subCategory = await SubCategory.findById(subCategoryId);
    if (!subCategory) {
      return res.status(404).json({ message: 'Sub-category not found' });
    }
    const item = new Item({ name, image, description, taxApplicability, tax, baseAmount, discount, totalAmount, subCategory: subCategoryId });
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all items
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find().populate('subCategory');
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get item by ID
exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id).populate('subCategory');
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an item
exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Search item by name
exports.searchItemByName = async (req, res) => {
  const { name } = req.query;
  try {
    const items = await Item.find({ name: { $regex: name, $options: 'i' } });
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
