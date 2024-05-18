const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  taxApplicability: { type: Boolean, required: true },
  tax: { type: Number },
  taxType: { type: String }
});

module.exports = mongoose.model('Category', categorySchema);
