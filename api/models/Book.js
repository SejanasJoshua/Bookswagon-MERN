const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      type: String,
      required: false,
    },
    author: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
    special: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);
