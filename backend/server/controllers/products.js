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
