import React, { useEffect, useRef, useState } from "react";
import { useData } from "../../contexts/DataContext";
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
  const { setProducts } = useData();
  const [formData, setFormData] = useState(initialState);
  const modalRef = useRef(null);
  useCloseModal(modalRef, onClose);

  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const data = await addProduct(formData);

  //     setFormData(initialState);
  //     setProducts((prevState) => [...prevState, data]);
  //     onClose();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-white p-4 rounded shadow-md w-96">
        <h2 className="text-xl mb-4 text-black">Add Product</h2>
        <form onSubmit>
          <div className="mb-4">
            <Input
              name="name"
              type="text"
              changeHandler={changeHandler}
              labelText="Item name: "
              labelClass="block mb-1"
              inputClass="text-black  w-full px-3 py-2 border rounded"
              placeHolder="Enter product name"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Item Image</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter item image URL"
            />
          </div>
          <div className="mb-4">
            <Input
              name="description"
              type="text"
              changeHandler={changeHandler}
              labelText="Enter product descriptionPrice: "
              labelClass="block mb-1"
              inputClass="text-black  w-full px-3 py-2 border rounded"
              placeHolder="Enter product description"
              txtarea={true}
            />
          </div>
          <div className="mb-4">
            <Input
              name="price"
              type="number"
              changeHandler={changeHandler}
              labelText="Price: "
              labelClass="block mb-1"
              inputClass="text-black  w-full px-3 py-2 border rounded"
              placeHolder="Enter product price"
            />
          </div>
          <Button
            type="submit"
            btnClass="bg-blue-500 text-white py-2 px-4"
            btnTxt="Add Item"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
