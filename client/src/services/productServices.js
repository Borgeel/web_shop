import { requestServices } from "./requestServices";

export const productServices = {
  getAllProducts: async () => {
    try {
      const response = await requestServices.request("/products", "GET");
      return response;
    } catch (error) {
      console.log("Error from productServices.getAllProducts: ", error);
    }
  },
  getProductById: async (productId) => {
    try {
      const response = await requestServices.request(
        `/products/${productId}`,
        "GET"
      );
      return response;
    } catch (error) {
      console.log("Error from productServices.getProductById: ", error);
    }
  },
  createProduct: async (productData) => {
    try {
      const response = await requestServices.requestWithAuth(
        "/products",
        "POST",
        productData
      );
      return response;
    } catch (error) {
      console.log("Error from productServices.createProduct: ", error);
    }
  },
  updateProductById: async (updatedData, productId) => {
    try {
      const response = await requestServices.requestWithAuth(
        `/product/${productId}`,
        "PUT",
        updatedData
      );
      return response;
    } catch (error) {
      console.log("Error from productServices.updateProductById: ", error);
    }
  },
  deleteProductById: async (productId) => {
    try {
      const response = await requestServices.requestWithAuth(
        `/products/${productId}`,
        "DELETE"
      );
      return response;
    } catch (error) {
      console.log("Error from productServices.deleteProductById: ", error);
    }
  },
};
