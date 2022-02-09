const mongoose = require("mongoose");
const {marked} = require("marked");
const slugify = require("slugify");
const createDomPurify = require("dompurify");
const { JSDOM } = require("jsdom");
const dompurify = createDomPurify( new JSDOM().window)

const articleSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  translator: {
      type: String,
  },
  image: {
    type: String,
    default: "/assets/articleimage.jpg",
  },
  created: {
    type: Date,
    default: Date.now(),
  },
  title: {
    type: String,
    required: true,
  },
  slug_title: {
    type: String,
    required: true,
  },
  markdown: {
    type: String,
    required: true,
  },
  sanitizedHtml: {
      type: String,
      require: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  cat: {
    type: Array,
    default: [],
  },
  tags: {
    type: Array,
    default: [],
  },
});

articleSchema.pre("validate", function (next) {
  if (this.slug_title) {
    this.slug = slugify(this.slug_title, { lower: true, strict: true });
  }
  if(this.markdown){
      this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
  }
  next();
});

mongoose.models = {};

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
