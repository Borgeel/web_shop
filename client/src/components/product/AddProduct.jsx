import React, { useRef, useState } from "react";
import { useProductContext } from "../../contexts/ProductContext";
import Input from "../common/Input";
import useCloseModal from "../../hooks/useCloseModal";
import { Button } from "../common";

const initialState = {
  name: "",
  description: "",
  image: "",
  price: "",
};

const AddProduct = ({ onClose }) => {
  const { addProduct } = useProductContext();
  const [formData, setFormData] = useState(initialState);
  const modalRef = useRef(null);
  useCloseModal(modalRef, onClose);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await addProduct(formData);
      setFormData(initialState);
      onClose();
    } catch (error) {
      console.log("Error from AddProduct.submitHandler: ", error);
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-white p-4 rounded shadow-md w-96">
        <h2 className="text-xl mb-4 text-black">Add Product</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <Input
              name="name"
              type="text"
              value={formData.name}
              onChange={onChange}
              labelText="Item name:"
              placeholder="Enter product name"
            />
          </div>
          <div className="mb-4">
            <Input
              name="image"
              type="text"
              value={formData.image}
              onChange={onChange}
              labelText="Item Image:"
              placeholder="Enter item image URL"
            />
          </div>
          <div className="mb-4">
            <Input
              name="description"
              type="text"
              value={formData.description}
              onChange={onChange}
              labelText="Item Description:"
              placeholder="Enter product description"
              isTextarea={true}
            />
          </div>
          <div className="mb-4">
            <Input
              name="price"
              type="number"
              value={formData.price}
              onChange={onChange}
              labelText="Price:"
              placeholder="Enter product price"
            />
          </div>
          <Button type="submit" className="bg-blue-500 text-white py-2 px-4">
            Add Item
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
