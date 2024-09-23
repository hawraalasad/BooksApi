const { model, Schema } = require("mongoose");
const BookSchema = new Schema({
  Title: { type: String },
  Author: { type: String },
  Price: { type: Number },
  Image: { type: String },
});
module.exports = model("Book", BookSchema);
