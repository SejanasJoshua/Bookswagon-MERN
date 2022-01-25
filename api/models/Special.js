const mongoose = require("mongoose");

const SpecialSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    record: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Special", SpecialSchema);
