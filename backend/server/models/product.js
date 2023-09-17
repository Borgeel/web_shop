import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    enum: ["New", "Used", "Refurbished", "Open Box"],
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  location: String,
  imageUrl: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Product", productSchema);
