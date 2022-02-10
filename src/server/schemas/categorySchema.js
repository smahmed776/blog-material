const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
      type: String
  },
  articleIds: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "article"
  }],
  
});


mongoose.models = {};

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
