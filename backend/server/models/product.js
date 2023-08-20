import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  id: String,
  name: String,
  creator: String,
  description: String,
  tags: [String],
  selectedFile: String,
  price: Number,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("Product", productSchema);
