import mongoose from "mongoose";
import Product from "../models/product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (!products) {
      res.status(404).json({ success: false, message: "No products found" });
    }

    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const addProduct = async (req, res) => {
  console.log(req.body);
  const product = req.body;

  const newProduct = new Product({
    ...product,
    creator: req.user._id,
    createdAt: new Date().toISOString(),
  });

  try {
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ success: false, message: error });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  console.log(id);

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No post with ID ${id}`);
    }

    await Product.findByIdAndRemove(id);

    res
      .status(200)
      .json({ success: true, message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};
