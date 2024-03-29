const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        }
    }
)

mongoose.model = {};

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;