const mongoose = require("mongoose");
const {marked} = require("marked");
const slugify = require("slugify");
const createDomPurify = require("dompurify");
const { JSDOM } = require("jsdom");
const dompurify = createDomPurify( new JSDOM().window)

const categorySchema = new mongoose.Schema({
  name: {
      type: String
  },
  articles: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "articles"
  }],
  
});


mongoose.models = {};

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
