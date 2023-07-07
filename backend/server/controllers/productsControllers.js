import express from "express";

export const getProducts = async (req, res) => {
  res.json({ message: "Product List" });
};
